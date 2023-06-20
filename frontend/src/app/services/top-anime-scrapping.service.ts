import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from './anime';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopAnimeScrappingService {
  private scrappingUrl = 'http://localhost:8081/api/topanime/data';
  public topAnimes: Anime[] = [];

  constructor(private http: HttpClient) {}

  getScrappingTopAnime(): Observable<any> {
    return this.http.get<any>(this.scrappingUrl);
  }

  getTopAnime(): Anime[] {
    this.topAnimes = [];
    this.getScrappingTopAnime().subscribe((response: any) => {
      for (let i = 0; i < 30; i++) {
        const anime: Anime = {
          id: response[i].id,
          title: response[i].title,
          image: response[i].image,
          rating: response[i].rating,
          url: response[i].url,
          synopsis: '',
          genres: [],
          episodes: 0,
          status: '',
          start_date: new Date(),
          end_date: new Date(),
        };
        this.topAnimes.push(anime);
      }
    });
    return this.topAnimes;
  }
}
