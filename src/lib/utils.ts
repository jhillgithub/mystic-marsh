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
