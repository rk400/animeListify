import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../services/user';
import { Router } from '@angular/router';
interface AuthObserver {
  onAuthenticationChange(isAuthenticated: boolean): void;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: User;
  public loggedIn: boolean = false;
  private observers: AuthObserver[] = [];
  private dbUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient, private router: Router) { }

  public isAuthenticated(): boolean {
    return this.loggedIn;
  }

  public setAuthenticated(isAuthenticated: boolean): void {
    this.loggedIn = isAuthenticated;
    this.notifyObservers(isAuthenticated);
  }

  public subscribe(observer: AuthObserver): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: AuthObserver): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  private notifyObservers(isAuthenticated: boolean): void {
    this.observers.forEach((observer) => {
      observer.onAuthenticationChange(isAuthenticated);
    });
  }
  login() {
    // Lógica de inicio de sesión y autenticación
    this.loggedIn = true;
  }

  logout() {
    // Lógica de cierre de sesión
    this.loggedIn = false;
    this.router.navigateByUrl('/login');

  }

  obtenerUser(username: string): Observable<any> {
    const url = `${this.dbUrl}/users/search/` + username; // Reemplaza 'auth' con la URL adecuada para la autenticación en tu backend de Spring Boot
    return this.http.get(url)
  }

  obtenerUsuarios(): Observable<any> {
    const url = `${this.dbUrl}/users`; // Reemplaza 'auth' con la URL adecuada para la autenticación en tu backend de Spring Boot
    return this.http.get(url)
  }

  agregarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.dbUrl}/users`, usuario);
  }

  deleteUser(idUser: any): Observable<any> {
    const url = `${this.dbUrl}/users/${idUser}`;
    return this.http.delete(url);
  }

  obtenerAnimesUser(idUser: string): Observable<any> {
    const url = `${this.dbUrl}/users/${idUser}/animes`;
    return this.http.get(url)
  }

  anadirAnime(id: any, anime: any): Observable<any> {
    const url = `${this.dbUrl}/users/${id}/animes`;
    return this.http.post(url, anime)
  }

  quitarAnime(userId: any, animeId: any): Observable<any> {
    const url = `${this.dbUrl}/users/${userId}/animes/${animeId}`;
    return this.http.delete(url);
  }

  obtenerAnimesTodos(): Observable<any> {
    const url = `${this.dbUrl}/animes`;
    return this.http.get(url)
  }

  updateUser(idUser: any, user: any): Observable<any> {
    const url = `${this.dbUrl}/users/${idUser}`;
    return this.http.put(url, user);
  }
}
