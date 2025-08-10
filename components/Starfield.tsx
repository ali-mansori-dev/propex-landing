import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Starfield() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#000" },
        particles: {
          number: { value: 150 },
          color: { value: "#ffffff" },
          size: { value: 1.5 },
          move: { enable: true, speed: 0.3 },
        },
        fullScreen: { enable: true },
      }}
    />
  );
}