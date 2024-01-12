import { Vector3 } from "three";
import Perlin from "./perlin";

// Seed value is optional, default is 0.
const seed = Math.random();
const noise = new Perlin(seed);

export const degreesToRadians = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

export const randomBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

/**https://en.wikipedia.org/wiki/Linear_congruential_generator */
export class LCG {
  private seed: number;
  /**@NOTE default values below are common for this
   * and can be found on the table in the wikipedia link */
  private modulus: number;
  private multiplier: number;
  private increment: number;

  constructor(seed: number) {
    this.seed = seed;
    this.modulus = 2 ** 32;
    this.multiplier = 1664525;
    this.increment = 1013904223;
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
