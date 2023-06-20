export interface Anime {
  id: string;
  title: string;
  title_english?: string;
  image?: string;
  rating?: string;
  url?: string;
  synopsis?: string;
  genres?: string[];
  episodes?: number;
  status?: string;
  start_date?: Date;
  end_date?: Date;
  main_picture?: AnimePictures;
  //user_status: string;
  //user_start_date: Date;
  //user_end_date: Date;
}

export interface AnimePictures{
  large: string;
  medium: string;
}
