import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Seeded random for consistent particle positions
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Rotating Gear Component
const Gear = ({ position, scale = 1, speed = 1, color = '#22c55e' }) => {
  const meshRef = useRef();
  const teeth = 12;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01 * speed;
    }
  });

  const gearShape = useMemo(() => {
    const shape = new THREE.Shape();
    const outerRadius = 1;
    const innerRadius = 0.6;
    const toothHeight = 0.25;

    for (let i = 0; i < teeth; i++) {
      const angle = (i / teeth) * Math.PI * 2;
      const nextAngle = ((i + 0.5) / teeth) * Math.PI * 2;
      const midAngle = ((i + 0.25) / teeth) * Math.PI * 2;
      const midAngle2 = ((i + 0.75) / teeth) * Math.PI * 2;

      if (i === 0) {
        shape.moveTo(
          Math.cos(angle) * outerRadius,
          Math.sin(angle) * outerRadius
        );
      }

      shape.lineTo(
        Math.cos(midAngle) * (outerRadius + toothHeight),
        Math.sin(midAngle) * (outerRadius + toothHeight)
      );
      shape.lineTo(
        Math.cos(nextAngle) * (outerRadius + toothHeight),
        Math.sin(nextAngle) * (outerRadius + toothHeight)
      );
      shape.lineTo(
        Math.cos(midAngle2) * outerRadius,
        Math.sin(midAngle2) * outerRadius
      );
      shape.lineTo(
        Math.cos(((i + 1) / teeth) * Math.PI * 2) * outerRadius,
        Math.sin(((i + 1) / teeth) * Math.PI * 2) * outerRadius
      );
    }

    // Inner circle (hole)
    const holePath = new THREE.Path();
    holePath.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
    shape.holes.push(holePath);

    return shape;
  }, []);

  const extrudeSettings = {
    steps: 1,
    depth: 0.2,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 3,
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <extrudeGeometry args={[gearShape, extrudeSettings]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

// Floating Machine Part
const MachinePart = ({ position, rotation = [0, 0, 0] }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation}>
      {/* Main cylinder body */}
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
        <meshStandardMaterial color="#166534" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Top ring */}
      <mesh position={[0, 0.8, 0]}>
        <torusGeometry args={[0.55, 0.08, 16, 32]} />
        <meshStandardMaterial color="#22c55e" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Bottom ring */}
      <mesh position={[0, -0.8, 0]}>
        <torusGeometry args={[0.55, 0.08, 16, 32]} />
        <meshStandardMaterial color="#22c55e" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

// Animated Sphere with distortion
const AnimatedSphere = ({ position }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[0.8, 64, 64]} position={position}>
        <MeshDistortMaterial
          color="#22c55e"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

// Rotating Ring
const RotatingRing = ({ position, scale = 1, axis = 'y' }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      if (axis === 'y') meshRef.current.rotation.y += 0.01;
      if (axis === 'x') meshRef.current.rotation.x += 0.01;
      if (axis === 'z') meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.05, 16, 100]} />
      <meshStandardMaterial color="#f97316" metalness={0.9} roughness={0.1} transparent opacity={0.8} />
    </mesh>
  );
};

// Particles with deterministic positions
const Particles = ({ count = 100 }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (seededRandom(i * 3) - 0.5) * 10;
      const y = (seededRandom(i * 3 + 1) - 0.5) * 10;
      const z = (seededRandom(i * 3 + 2) - 0.5) * 10;
      temp.push({ x, y, z });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={mesh}>
      {particles.map((particle, i) => (
        <mesh key={i} position={[particle.x, particle.y, particle.z]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#22c55e" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

// Main Scene
const Scene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#22c55e" />
      <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.3} penumbra={1} color="#f97316" />

      {/* Main gear in center */}
      <Gear position={[0, 0, 0]} scale={0.8} speed={1} color="#22c55e" />

      {/* Secondary gears */}
      <Gear position={[1.8, 1, -0.5]} scale={0.4} speed={-2} color="#166534" />
      <Gear position={[-1.8, -0.8, -0.5]} scale={0.5} speed={1.5} color="#15803d" />

      {/* Floating elements */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <MachinePart position={[2.5, 0.5, 0]} />
      </Float>

      <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
        <MachinePart position={[-2.5, -0.3, 0.5]} rotation={[0.5, 0, 0.3]} />
      </Float>

      {/* Orbiting rings */}
      <RotatingRing position={[0, 0, 0]} scale={1.8} axis="y" />
      <RotatingRing position={[0, 0, 0]} scale={2.2} axis="x" />

      {/* Animated sphere */}
      <AnimatedSphere position={[-1.5, 1.5, 1]} />

      {/* Background particles */}
      <Particles count={80} />
    </>
  );
};

// Main component
const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3D;
