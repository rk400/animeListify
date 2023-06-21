import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/services/anime';
import { AnimeAPIService } from 'src/app/services/anime-api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  animes: Anime[] = [];

  constructor(private authService: AuthService,
              private animeAPIService: AnimeAPIService) { }

  ngOnInit(): void {
    this.animeAPIService.getAnimesAPI()
      .subscribe(
        (data: any) => {
          this.animes = data;
          console.log("Resultado: " + data);
        },
        (error) => {
          console.error("Error al obtener el producto:", error);
        }
      );
  }

  isLogged(): boolean {
    return this.authService.isAuthenticated();
  }
}
