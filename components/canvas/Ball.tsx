import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Decal, OrbitControls, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '@/components/canvas/Loader';

interface BallProps {
  imageUrl: string;
}

const Ball = ({ imageUrl }: BallProps) => {
  const [decal] = useTexture([imageUrl]);
  const meshRef = useRef<THREE.Mesh>(null);
  const [isTouched, setIsTouched] = useState(false);

  useFrame(({ clock }) => {
    if (meshRef.current && !isTouched) {
      meshRef.current.rotation.y = Math.tan(clock.getElapsedTime() * 0.5) / 20;
    }
  });

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0.15, 0.05]} intensity={0.5} />
      <mesh
        castShadow
        receiveShadow
        scale={1}
        ref={meshRef}
        onPointerDown={() => setIsTouched(true)}
        // onClick={() => setIsTouched(true)}
      >
        {/* Shape */}
        <icosahedronGeometry args={[2.5, 1]} />
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

interface BallCanvasProps {
  icon: string;
}

const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <Canvas frameloop='always' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imageUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
