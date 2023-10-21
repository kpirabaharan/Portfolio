'use client';

import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Decal,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Preload,
  useTexture,
} from '@react-three/drei';

import CanvasLoader from '@/components/canvas/Loader';

interface BallProps {
  imageUrl: string;
}

const Ball = ({ imageUrl }: BallProps) => {
  const [decal] = useTexture([imageUrl]);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.setY(Math.sin(clock.getElapsedTime() * 0.5));
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
}

const BallSingle = ({ icon }: BallSingleProps) => {
  return (
    <Canvas frameloop='always' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <directionalLight position={[0, 10, 15]} intensity={0.5} />
        <PerspectiveCamera makeDefault>
          <Ball imageUrl={icon} />
        </PerspectiveCamera>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallSingle;
