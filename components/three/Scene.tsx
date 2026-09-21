'use client';

import { Environment, Float, Lightformer, Sparkles } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState, type RefObject } from 'react';
import { MathUtils, type Group, type Mesh } from 'three';

import { sceneColors } from '@/lib/theme';
import { cn } from '@/lib/utils';

export type SceneVariant = 'hero' | 'compact';

// Outer diameter of the gyroscope in world units, used to fit it to the viewport.
const OBJECT_SIZE = 3.9;

const RINGS: {
  radius: number;
  speed: number;
  tilt: [number, number, number];
}[] = [
  { radius: 1.55, speed: 0.6, tilt: [Math.PI / 2.4, 0, 0] },
  { radius: 1.75, speed: -0.45, tilt: [0, Math.PI / 2.6, Math.PI / 5] },
  { radius: 1.95, speed: 0.3, tilt: [Math.PI / 3, -Math.PI / 4, 0] },
];

// Window-wide pointer position in NDC, so the canvas itself can ignore pointer
// events and never block text selection or clicks.
const useWindowPointer = (): RefObject<{ x: number; y: number }> => {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return pointer;
};

const Ring = ({
  radius,
  speed,
  tilt,
}: {
  radius: number;
  speed: number;
  tilt: [number, number, number];
}) => {
  const spin = useRef<Group>(null!);

  useFrame((_, delta) => {
    spin.current.rotation.z += delta * speed;
  });

  return (
    <group rotation={tilt}>
      <group ref={spin}>
        <mesh>
          <torusGeometry args={[radius, 0.012, 16, 160]} />
          <meshStandardMaterial
            color={sceneColors.ring}
            emissive={sceneColors.primary}
            emissiveIntensity={0.5}
            metalness={0.6}
            roughness={0.25}
          />
        </mesh>
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.065, 24, 24]} />
          <meshStandardMaterial
            color={sceneColors.primary}
            emissive={sceneColors.primary}
            emissiveIntensity={3}
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
};

const Gyroscope = ({ variant }: { variant: SceneVariant }) => {
  const tilt = useRef<Group>(null!);
  const core = useRef<Mesh>(null!);
  const shell = useRef<Mesh>(null!);
  const pointer = useWindowPointer();
  const viewport = useThree(state => state.viewport);

  // Hero: sit beside the copy on wide screens, centre on narrow ones.
  const sideBySide = variant === 'hero' && viewport.aspect > 1.1;
  const available = sideBySide
    ? Math.min(viewport.width * 0.5, viewport.height * 0.8)
    : Math.min(viewport.width, viewport.height) * 0.9;
  const scale = available / OBJECT_SIZE;
  const x = sideBySide ? viewport.width * 0.22 : 0;
  // Stacked hero (phones): drop below the headline into the empty middle.
  const y = variant === 'hero' && !sideBySide ? -viewport.height * 0.1 : 0;

  useFrame((_, delta) => {
    core.current.rotation.x += delta * 0.12;
    core.current.rotation.y += delta * 0.25;
    shell.current.rotation.y -= delta * 0.1;

    tilt.current.rotation.y = MathUtils.damp(
      tilt.current.rotation.y,
      pointer.current.x * 0.45,
      3,
      delta,
    );
    tilt.current.rotation.x = MathUtils.damp(
      tilt.current.rotation.x,
      -pointer.current.y * 0.3,
      3,
      delta,
    );
  });

  return (
    <group position={[x, y, 0]} scale={scale}>
      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.5}>
        <group ref={tilt}>
          <mesh ref={core}>
            <icosahedronGeometry args={[0.95, 0]} />
            <meshStandardMaterial
              color={sceneColors.core}
              metalness={0.9}
              roughness={0.22}
              envMapIntensity={1.4}
              flatShading
            />
          </mesh>
          <mesh ref={shell} scale={1.3}>
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial
              color={sceneColors.primary}
              wireframe
              transparent
              opacity={0.18}
            />
          </mesh>
          {RINGS.map((ring, i) => (
            <Ring key={i} {...ring} />
          ))}
        </group>
      </Float>
    </group>
  );
};

const Lighting = () => (
  <>
    <ambientLight intensity={0.2} />
    <directionalLight position={[4, 5, 3]} intensity={1.1} />
    <pointLight
      position={[-3, -2, 2]}
      intensity={18}
      color={sceneColors.primary}
    />
    {/* Local environment map: reflections without fetching an HDR file. */}
    <Environment resolution={256} frames={1}>
      <Lightformer
        form='rect'
        intensity={2.5}
        color={sceneColors.white}
        position={[0, 5, -4]}
        scale={[10, 2, 1]}
      />
      <Lightformer
        form='ring'
        intensity={4}
        color={sceneColors.primary}
        position={[-5, 1, 2]}
        scale={3}
      />
      <Lightformer
        form='rect'
        intensity={2}
        color={sceneColors.brand}
        position={[5, -2, 1]}
        scale={[6, 2, 1]}
      />
      <Lightformer
        form='rect'
        intensity={1.5}
        color={sceneColors.white}
        position={[0, -4, 3]}
        scale={[8, 1.5, 1]}
      />
    </Environment>
  </>
);

interface SceneProps {
  variant?: SceneVariant;
  className?: string;
}

const Scene = ({ variant = 'hero', className }: SceneProps) => {
  const container = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();

  // Stop the render loop entirely while the canvas is scrolled out of view.
  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={container}
      aria-hidden
      className={cn(
        'pointer-events-none transition-opacity duration-1000',
        ready ? 'opacity-100' : 'opacity-0',
        className,
      )}
    >
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 7], fov: 35 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        frameloop={inView && !reduceMotion ? 'always' : 'demand'}
        style={{ pointerEvents: 'none' }}
        onCreated={() => setReady(true)}
      >
        <Lighting />
        <Gyroscope variant={variant} />
        {variant === 'hero' && (
          <Sparkles
            count={60}
            scale={[12, 6, 3]}
            size={2}
            speed={0.25}
            opacity={0.5}
            color={sceneColors.primary}
          />
        )}
      </Canvas>
    </div>
  );
};

export default Scene;
