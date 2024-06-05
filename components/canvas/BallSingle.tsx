'use client';

import {
  Decal,
  OrbitControls,
  PerspectiveCamera,
  Preload,
  useTexture,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';

import CanvasLoader from '@/components/canvas/Loader';

interface BallProps {
  imageUrl: string;
  index: number;
}

const Ball = ({ imageUrl, index }: BallProps) => {
  const [decal] = useTexture([imageUrl]);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      if (index % 2 == 0) {
        meshRef.current.position.setY(Math.sin(clock.getElapsedTime() * 0.5));
      } else {
        meshRef.current.position.setY(
          Math.sin(clock.getElapsedTime() * 0.5 + Math.PI),
        );
      }
    }
  });

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        scale={0.95}
        ref={meshRef}
        position={[0, 0, -8]}
      >
        {/* Shape */}
        <icosahedronGeometry args={[2.5, 6]} />
        <meshStandardMaterial
          color='white'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Display Image on Shape */}
        <Decal
          position={[0, 0, 2.5]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={2.5}
          map={decal}
        />
      </mesh>
    </>
  );
};

interface BallSingleProps {
  icon: string;
  index: number;
}

const BallSingle = ({ icon, index }: BallSingleProps) => {
  return (
    <Canvas frameloop='always' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 10, 15]} intensity={0.5} />
        <PerspectiveCamera makeDefault position={[10, 10, 0]}>
          <Ball index={index} imageUrl={icon} />
        </PerspectiveCamera>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallSingle;
