import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnimeAPIService {
  private apiKey = ''; //0e42f89998msh8918096688461e2p104704jsnd035db11df5d';
  private apiUrl = 'animes5.p.rapidapi.com';

  private urlGET = 'https://animes5.p.rapidapi.com/';

  constructor(private http: HttpClient) {}

  getAnimesAPI(): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiUrl,
    });
    return this.http.get(this.urlGET, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.message || 'Server error');
      })
    );
  }

  searchAnimeAPI(query: string): Observable<any> {
    if (query !== '') {
      query = `&q=${query}&`;
    } else {
      query = '';
    }

    const url = `${this.urlGET}?${query}fields=*&limit=50`;
    const headers = new HttpHeaders({
      'X-RapidAPI-Host': this.apiUrl,
      'X-RapidAPI-Key': this.apiKey,
    });

    return this.http.get(url, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.message || 'Server error');
      })
    );
  }
}
