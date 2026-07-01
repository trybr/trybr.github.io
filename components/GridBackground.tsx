"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ==================== КРАСИВЫЙ ШЕЙДЕР (ДЛЯ ВСЕХ УСТРОЙСТВ) ====================

const WireframeShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color("#6C63FF") },
    uColor2: { value: new THREE.Color("#FF6B6B") },
    uOpacity: { value: 0.2 },
    uScrollOffset: { value: 0 },
  },
  vertexShader: `
    varying vec3 vPosition;
    varying float vHeight;
    uniform float uScrollOffset;
    
    void main() {
      vPosition = position;
      vHeight = position.y;
      
      vec3 pos = position;
      pos.y += uScrollOffset * 0.5;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform float uTime;
    uniform float uOpacity;
    varying vec3 vPosition;
    varying float vHeight;
    
    void main() {
      float t = vHeight / 15.0 + 0.5;
      t = clamp(t, 0.0, 1.0);
      vec3 color = mix(uColor1, uColor2, t);
      
      float pulse = 0.8 + 0.2 * sin(uTime * 0.5 + vPosition.x * 0.3 + vPosition.y * 0.2);
      
      float glow = 1.0 - abs(vPosition.x) / 12.0;
      glow = clamp(glow, 0.3, 1.0);
      
      float finalOpacity = uOpacity * pulse * glow;
      
      gl_FragColor = vec4(color, finalOpacity);
    }
  `,
};

// ==================== КОМПОНЕНТ СЕТКИ ====================

function WaveGrid({ scrollOffset = 0 }: { scrollOffset?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  // Определяем мобильное устройство
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Создаем геометрию с разным количеством сегментов
  const geometry = useMemo(() => {
    const segments = isMobile ? 30 : 100; // Уменьшил для мобильных
    const geo = new THREE.PlaneGeometry(20, 20, segments, segments);
    geo.rotateX(-Math.PI / 2);
    return geo;
  }, [isMobile]);

  const originalPositions = useMemo(() => {
    return new Float32Array(geometry.attributes.position.array);
  }, [geometry]);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uScrollOffset.value = scrollOffset;
    }
  }, [scrollOffset]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const time = clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position.array;

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = time;
    }

    // На мобильных волны более плавные и менее интенсивные
    const amplitude = isMobile ? 0.25 : 0.4;
    const speed = isMobile ? 0.5 : 0.8;

    // Пропускаем каждый 2-й кадр на мобильных для экономии
    if (isMobile && Math.floor(time * 30) % 2 === 0) {
      // Обновляем позиции только каждый второй кадр
      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions[i];
        const z = originalPositions[i + 2];

        // Упрощенные волны для мобильных
        const wave1 = Math.sin(x * 0.4 + time * speed) * amplitude;
        const wave2 =
          Math.cos(z * 0.3 + time * speed * 0.7) * (amplitude * 0.7);

        positions[i + 1] = wave1 + wave2;
      }
    } else if (!isMobile) {
      // Полные красивые волны для десктопа
      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions[i];
        const z = originalPositions[i + 2];

        const wave1 = Math.sin(x * 0.5 + time * speed) * amplitude;
        const wave2 =
          Math.cos(z * 0.4 + time * speed * 0.8) * (amplitude * 0.8);
        const wave3 =
          Math.sin((x + z) * 0.3 + time * speed * 0.6) * (amplitude * 0.5);
        const wave4 =
          Math.sin(x * 0.2 + z * 0.2 + time * speed * 0.4) * (amplitude * 0.5);

        positions[i + 1] = wave1 + wave2 + wave3 + wave4;
      }
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      rotation={[-0.2, 0.3, 0]}
      scale={isMobile ? 1.0 : 1.1}
    >
      <shaderMaterial
        ref={materialRef}
        {...WireframeShader}
        wireframe={true}
        transparent={true}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

// ==================== ПАРЯЩИЕ ТОЧКИ ====================

function FloatingPoints({ isMobile = false }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const count = isMobile ? 100 : 500; // Еще уменьшил для мобильных
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const color1 = new THREE.Color("#6C63FF");
    const color2 = new THREE.Color("#FF6B6B");

    for (let i = 0; i < count; i++) {
      const radius = 8 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;

      positions[i * 3] = Math.cos(theta) * Math.sin(phi) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = Math.sin(theta) * Math.sin(phi) * radius;

      const t = Math.random();
      const color = color1.clone().lerp(color2, t);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, [isMobile]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const time = clock.getElapsedTime();
    const speed = isMobile ? 0.005 : 0.02; // Очень медленно на мобильных
    pointsRef.current.rotation.y = time * speed;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.02 : 0.05}
        vertexColors
        transparent
        opacity={isMobile ? 0.2 : 0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// ==================== ХУК ДЛЯ СКРОЛЛА ====================

function useScrollPosition() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
      setScrollOffset(progress);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return scrollOffset;
}

// ==================== ГЛАВНЫЙ КОМПОНЕНТ ====================

export default function WaveGridBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollOffset = useScrollPosition();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Canvas
        camera={{
          position: isMobile ? [0, 3, 10] : [0, 5, 12],
          fov: isMobile ? 50 : 60,
        }}
        gl={{
          alpha: true,
          antialias: !isMobile, // Отключаем на мобильных
          powerPreference: isMobile ? "default" : "high-performance",
          failIfMajorPerformanceCaveat: false,
        }}
        dpr={isMobile ? [1, 1] : [1, 1.5]} // Ограничиваем на мобильных
        style={{
          background: "#0a0a0f",
          width: "100%",
          height: "100%",
        }}
      >
        <color attach="background" args={["#0a0a0f"]} />

        {/* Туман только на десктопе */}
        {!isMobile && <fog attach="fog" args={["#0a0a0f", 15, 25]} />}

        <ambientLight intensity={isMobile ? 0.3 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={isMobile ? 0.3 : 0.5} />

        <WaveGrid scrollOffset={scrollOffset} />
        <FloatingPoints isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
