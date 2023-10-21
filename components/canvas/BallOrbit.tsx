'use client';

import { Suspense, useRef, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Center,
  Decal,
  OrbitControls,
  PerspectiveCamera,
  Preload,
  Text3D,
  Text,
  useTexture,
} from '@react-three/drei';

import useWindowSize from '@/hooks/useWindowSize';

import CanvasLoader from '@/components/canvas/Loader';

interface BallProps {
  width: number;
  total: number;
  index: number;
  item: {
    name: string;
    icon: StaticImageData;
    expertise: boolean;
  };
}

const Ball = ({ width, total, index, item }: BallProps) => {
  const decal = useTexture(item.icon.src);
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.setX(
        Math.sin(
          -1 * clock.getElapsedTime() * 0.25 +
            ((360 / total) * index * Math.PI) / 180,
        ) *
          (12 + 0.015 * width),
      );
      ref.current.position.setZ(
        Math.cos(
          -1 * clock.getElapsedTime() * 0.25 +
            ((360 / total) * index * Math.PI) / 180,
        ) * 12,
      );
    }
  });

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      scale={[
        2.8 + 0.00075 * width,
        2.0 + 0.000467 * width,
        2.0 + 0.000467 * width,
      ]}
    >
      <icosahedronGeometry args={[1, 12]} />
      <meshStandardMaterial color='white' flatShading />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1.15}
      >
        <meshBasicMaterial
          transparent
          polygonOffset
          polygonOffsetFactor={-10}
          map={decal}
        />
      </Decal>
      <Text
        font={'/Inter_Regular.json'}
        position={[0, -0.75, 1]}
        fontSize={0.33}
      >
        {item.name}
      </Text>
    </mesh>
  );
};

interface OrbitProps {
  techStack: {
    title: string;
    description: string;
    tech: { name: string; icon: StaticImageData; expertise: boolean }[];
  };
}

const Orbit = ({ techStack }: OrbitProps) => {
  const { width } = useThree((state) => state.size);

  return (
    <group position={[0, 0, -25]}>
      {techStack.tech.map((item, index) => (
        <Ball
          width={width}
          key={index}
          item={item}
          total={techStack.tech.length}
          index={index}
        />
      ))}

      <Center onCentered={(props) => {}}>
        <Text3D
          font={'/Inter_Bold.json'}
          size={2 + 0.00133 * width}
          letterSpacing={0.1}
        >
          {techStack.title}
          <meshBasicMaterial color={'rgb(14, 118, 110)'} />
        </Text3D>
      </Center>
    </group>
  );
};

interface BallOrbitProps {
  techStack: {
    title: string;
    description: string;
    tech: { name: string; icon: StaticImageData; expertise: boolean }[];
  };
}

const BallOrbit = ({ techStack }: BallOrbitProps) => {
  return (
    <div className='h-[150px] md:h-[200px] w-full'>
      <Canvas
        className='!touch-auto'
        frameloop='always'
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <directionalLight position={[0, 10, 10]} intensity={1} />
          <PerspectiveCamera makeDefault position={[10, 10, 0]}>
            <Orbit techStack={techStack} />
          </PerspectiveCamera>
          <OrbitControls
            enablePan={false}
            enableRotate={false}
            enableZoom={false}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BallOrbit;
