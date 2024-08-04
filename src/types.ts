export interface EpisodeType {
  code: string;
  season: number;
  no_in_season: number;
  title: string;
  synopsis: string;
  image_url: string;
}

export enum Status {
  INIT = "init",
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}
