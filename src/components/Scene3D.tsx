"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function ArchitecturalShape() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={1.8}>
      {/* Main building structure */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1.6, 1.2, 1.2]} />
        <meshStandardMaterial
          color="#8B6543"
          roughness={0.3}
          metalness={0.4}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 1.2, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[1.4, 0.6, 4]} />
        <meshStandardMaterial color="#6F4E37" roughness={0.4} metalness={0.3} />
      </mesh>

      {/* Window panels */}
      <mesh position={[0.81, 0.5, 0.2]}>
        <boxGeometry args={[0.02, 0.5, 0.35]} />
        <meshStandardMaterial
          color="#C9A96E"
          roughness={0.1}
          metalness={0.8}
          emissive="#C9A96E"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0.81, 0.5, -0.2]}>
        <boxGeometry args={[0.02, 0.5, 0.35]} />
        <meshStandardMaterial
          color="#C9A96E"
          roughness={0.1}
          metalness={0.8}
          emissive="#C9A96E"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Front door */}
      <mesh position={[0, 0.15, 0.61]}>
        <boxGeometry args={[0.3, 0.6, 0.02]} />
        <meshStandardMaterial color="#5C3D2E" roughness={0.5} metalness={0.2} />
      </mesh>

      {/* Base/Platform */}
      <mesh position={[0, -0.25, 0]}>
        <boxGeometry args={[2.2, 0.1, 1.8]} />
        <meshStandardMaterial color="#D4B896" roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Side extension */}
      <mesh position={[-1.1, 0.15, 0]}>
        <boxGeometry args={[0.6, 0.7, 0.8]} />
        <meshStandardMaterial
          color="#A67C52"
          roughness={0.35}
          metalness={0.35}
        />
      </mesh>

      {/* Decorative sphere */}
      <Float speed={3} floatIntensity={0.5}>
        <mesh position={[1.3, 1.0, 0]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <MeshDistortMaterial
            color="#C9A96E"
            roughness={0.2}
            metalness={0.9}
            distort={0.2}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Floating ring */}
      <Float speed={2} floatIntensity={0.3}>
        <mesh position={[-0.5, 1.5, 0.5]} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[0.2, 0.04, 16, 32]} />
          <meshStandardMaterial
            color="#C9A96E"
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Floating cube accent */}
      <Float speed={1.5} floatIntensity={0.4}>
        <mesh position={[0.8, 1.6, -0.3]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[0.15, 0.15, 0.15]} />
          <meshStandardMaterial
            color="#8B6543"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 200;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#C9A96E"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [3, 2, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          color="#FFF8EE"
        />
        <pointLight position={[-3, 2, -3]} intensity={0.5} color="#C9A96E" />
        <spotLight
          position={[0, 5, 0]}
          intensity={0.8}
          angle={0.5}
          penumbra={1}
          color="#F5EBE0"
        />
        <ArchitecturalShape />
        <Particles />
        <Environment preset="apartment" />
      </Canvas>
    </div>
  );
}
