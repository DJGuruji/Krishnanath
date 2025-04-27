import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ count = 150, color = '#FFDF80' }) => {
  const mesh = useRef();
  const { size, viewport } = useThree();
  
  // Use useMemo to prevent regenerating particles on every render
  const particles = useMemo(() => Array.from({ length: count }, () => ({
    position: [
      (Math.random() - 0.5) * 25,
      (Math.random() - 0.5) * 25,
      (Math.random() - 0.5) * 25
    ],
    size: Math.random() * 0.05 + 0.02
  })), [count]);

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.0001;
    mesh.current.rotation.y += 0.0001;
  });

  return (
    <group ref={mesh}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 5, 5]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
};

const GlowingSphere = ({ position = [0, 0, 0], color = '#FFB300', size = 1.5 }) => {
  const mesh = useRef();
  
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime() * 0.5;
    mesh.current.position.y = position[1] + Math.sin(t) * 0.1;
    mesh.current.rotation.y += 0.005;
    mesh.current.rotation.z += 0.001;
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent 
        opacity={0.2} 
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <ParticleField count={150} />
      <GlowingSphere position={[-5, 0, -5]} color="#A38A3A" size={1.8} />
      <GlowingSphere position={[5, 2, -3]} color="#FFB300" size={1.2} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2} 
      />
    </>
  );
};

const ThreeBackground = ({ opacity = 0.3 }) => {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity }}
    >
      <Canvas 
        gl={{ 
          antialias: false,
          powerPreference: 'default',
          alpha: true,
        }}
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 1.5]} // Limit pixel ratio for better performance
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground; 