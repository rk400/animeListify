import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/services/anime';
import { AuthService } from 'src/app/services/auth.service';
import { AnimeAPIService } from 'src/app/services/anime-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})

export class ProfileComponent implements OnInit {
  from: number = 0;
  to: number = 3;
  animes: Anime [] = [];
  watching: Anime [] = [];
  planToWatch: Anime [] = [];
  completed: Anime [] = [];
  nombre_animes: any [] = [];

  name: string = "";
  email: string = "";
  password: string = "";

  //DATOS PARA AÑADIR UN Anime
  startDate?: Date;
  endDate?: Date;
  rating?: string = "" ;
  episodeProgress?: number;
  status?: string;

  constructor(private router: Router, private routeActivated: ActivatedRoute, public authService: AuthService, public animeAPI: AnimeAPIService) { }

  ngOnInit(): void {
    this.name = this.authService.user.name;
    this.cargarAnimes(this.authService.user.id);
  }

  cargarAnimes(idUser: string): void {
    this.animes = [];
    this.authService.obtenerAnimesUser(idUser).subscribe(
      (data: any[]) => {
        this.nombre_animes = data;
        console.log(this.nombre_animes);
        for (let i = 0; i < this.nombre_animes.length; i++) {
          const anime : Anime = {
            id: this.nombre_animes[i].id,
            startDate: this.nombre_animes[i].startDate,
            endDate: this.nombre_animes[i].endDate,
            rating: this.nombre_animes[i].rating,
            episodeProgress: this.nombre_animes[i].episodeProgress,
            status: this.nombre_animes[i].status,
          }
          this.animes.push(anime);
    this.animeAPI.getAnimesAPI().subscribe(
      (data: any[]) => {
        for (let elemnet of data) {

        switch (anime.status) {
          case 'WATCHING':
            this.watching.push(this.animes[i]);
            break;
          case 'PLAN_TO_WATCH':
            this.planToWatch.push(this.animes[i]);
            break;
          case 'COMPLETED':
            this.completed.push(this.animes[i]);
            break;
          default:
            break;
        }
        }

      },
      (error) => {
        console.error('Error al obtener los animes:', error);
      }
    );
        }
        console.log(this);
      },
      (error) => {
        console.error('Error al obtener los favoritos:', error);
      }
    );
  }

  anadirAnimes(){
      const anime = {
        startDate: this.startDate,
        endDate: this.endDate,
        rating: this.rating,
        episodeProgress: this.episodeProgress,
        status: this.status
      };

    this.authService.anadirAnime(this.authService.user.id, anime).subscribe(
      response => {
        console.log('Anime agregado a la lista:', response);
        this.cargarAnimes(this.authService.user.id);
        this.vaciarCampos();

      },
      error => {
        console.error('Error al agregar el anime a la lista:', error);
      }
    );

  }

  quitarAnimes(idAnime: string){
    this.authService.quitarAnime(this.authService.user.id,idAnime).subscribe(
      response => {
        console.log('Anime eliminado de la lista:', response);
        this.cargarAnimes(this.authService.user.id);
      },
      error => {
        console.error('Error al eliminar el anime de la lista:', error);
      }
    );
  }

  vaciarCampos(){
    this.startDate = new Date();
    this.endDate = new Date();
    this.rating = "";
    this.episodeProgress = 0;
    this.status = undefined;
  }
}
