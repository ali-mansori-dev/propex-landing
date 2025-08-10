import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import type { Engine } from "tsparticles-engine";

export default function StarfieldBackground() {

  const particleOptions = {
    preset: "stars",
  };

  const customInit = async (engine: Engine) => {
    // this adds the preset to tsParticles, you can safely use the
    const test = await loadStarsPreset(engine);
    return test;
  };

  return (
    <>
      <Particles options={particleOptions} init={customInit} />
    </>
  );
}
