import { Noise } from "noisejs";
import { Vector3 } from "three";
const noise = new Noise(Math.random());

export const degreesToRadians = (degrees: number) => degrees * (Math.PI / 180);

export const randomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min;

/**https://en.wikipedia.org/wiki/Linear_congruential_generator */
export class LCG {
  private seed: number;
  /**@NOTE default values below are common for this
   * and can be found on the table in the wikipedia link */
  private modulus = 2 ** 32;
  private multiplier = 1664525;
  private increment = 1013904223;

  constructor(seed: number) {
    this.seed = seed;
  }

  random() {
    this.seed = (this.multiplier * this.seed + this.increment) % this.modulus;
    return this.seed / this.modulus;
  }
}

export const calculateWindRotation = (index: number, time: number) => {
  const timeFactor = 0.025;
  const scaleFactor = 0.2;

  const noiseValueY = noise.simplex2(index, time * timeFactor * 0.1);
  const noiseValueX = noise.simplex2(index + 1000, time * timeFactor);
  const noiseValueZ = noise.simplex2(index + 2000, time * timeFactor);

  const rotationY = noiseValueY * scaleFactor;
  const rotationX = noiseValueX * scaleFactor;
  const rotationZ = noiseValueZ * scaleFactor;

  return new Vector3(rotationX, rotationY, rotationZ);
};
