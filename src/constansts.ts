export const baseUrl = "https://friends-episodes-api.vercel.app";

export enum Paths {
  RANDOM = "randomize",
  RANDOM_SMILE = "randomize-smile",
  RANDOM_CRY = "randomize-cry",
  RANDOM_LAUGH = "randomize-laugh",
}

export const validPaths = [
  Paths.RANDOM,
  Paths.RANDOM_CRY,
  Paths.RANDOM_LAUGH,
  Paths.RANDOM_SMILE,
];
