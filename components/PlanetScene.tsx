import { Canvas } from "@react-three/fiber";
import {
  Stars,
} from "@react-three/drei";

export default function PlanetScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
      {/* نورپردازی */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      {/* پس‌زمینه ستاره‌ای */}
      <Stars radius={100} depth={50} count={300} factor={4} fade />

      <Stars radius={100} depth={80} count={3000} factor={2} fade />
    </Canvas>
  );
}
