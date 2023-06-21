export interface Anime {
  id: string;
  title?: string;
  title_english?: string;
  image?: string;
  rating?: string;
  mean?: number;
  url?: string;
  synopsis?: string;
  genres?: string[];
  num_episodes?: number;
  status?: Status | string;
  start_date?: string;
  end_date?: string | null;
  main_picture?: AnimePictures;
  startDate?: string;
  endDate?: string;
  episodeProgress?: number;
}

export interface AnimePictures{
  large: string;
  medium: string;
}

export enum Status {
  PLAN_TO_WATCH = "Planned to watch",
  WATCHING = "Watching",
  COMPLETED = "Completed",
}
