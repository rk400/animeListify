export interface Anime {
  id: string;
  title: string;
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
  //user_status: string;
  //user_start_date: Date;
  //user_end_date: Date;
}

export interface AnimePictures{
  large: string;
  medium: string;
}
