'use client';

import { Suspense, use, useRef } from 'react';
import { StaticImageData } from 'next/image';
import { Canvas, useFrame } from '@react-three/fiber';
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
import THREE from 'three';

import CanvasLoader from '@/components/canvas/Loader';

interface BallProps {
  total: number;
  index: number;
  item: {
    name: string;
    icon: StaticImageData;
    expertise: boolean;
  };
}

const Ball = ({ total, index, item }: BallProps) => {
  const decal = useTexture(item.icon.src);
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.setX(
        Math.sin(
          clock.getElapsedTime() * 0.25 +
            ((360 / total) * index * Math.PI) / 180,
        ) * 30,
      );
      ref.current.position.setZ(
        Math.cos(
          clock.getElapsedTime() * 0.25 +
            ((360 / total) * index * Math.PI) / 180,
        ) * 15,
      );
    }
  });

  return (
    <mesh ref={ref} castShadow receiveShadow scale={[2.5, 2, 2]}>
      <sphereGeometry args={[1, 128, 128]} />
      <meshStandardMaterial color='white' flatShading />
      <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} scale={1.2}>
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
  return (
    <group position={[0, 0, -25]}>
      {techStack.tech.map((item, index) => (
        <Ball
          key={index}
          item={item}
          total={techStack.tech.length}
          index={index}
        />
      ))}
      <Center>
        <Text3D font={'/Inter_Bold.json'} size={3} letterSpacing={0.1}>
          {techStack.title}
          <meshStandardMaterial color={'rgb(64, 168, 160)'} />
          <directionalLight position={[0, 300, 0]} intensity={1} />
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
    <div className='h-[250px] w-full'>
      <Canvas frameloop='always' gl={{ preserveDrawingBuffer: true }}>
        <directionalLight position={[0, 10, 15]} intensity={1} />
        <PerspectiveCamera makeDefault>
          <Orbit techStack={techStack} />
        </PerspectiveCamera>
        <OrbitControls
          enablePan={false}
          enableRotate={false}
          enableZoom={false}
        />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallOrbit;
