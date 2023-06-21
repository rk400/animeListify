export interface Anime {
  id?: string;
  mal_id?: number;
  title?: string;
  title_english?: string;
  image?: string;
  rating?: string;
  mean?: number;
  url?: string;
  synopsis?: string;
  genres?: string[];
  num_episodes?: number;
  status?: string;
  start_date?: string;
  end_date?: string | null;
  main_picture?: AnimePictures;
  startDate?: Date;
  endDate?: Date;
  episodeProgress?: number;
}

export interface AnimePictures {
  large: string;
  medium: string;
}
