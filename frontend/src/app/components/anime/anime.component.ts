import { Component, OnInit } from '@angular/core';
import { AnimeAPIService } from '../../services/anime-api.service';
import { Anime } from 'src/app/services/anime';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.sass'],
  providers: [AnimeAPIService]
})
export class AnimeComponent implements OnInit {
  seleccionado : string = '';
  animes : Anime[] = [];
  pageSize : number = 20;
  from : number = 0;
  to : number = 20;
  keyword : string = '';
  groupOfAnimes : Anime[][] = [];

  constructor(private animeAPIService: AnimeAPIService) { }

  ngOnInit(): void {
    this.animeAPIService.getAnimesAPI()
      .subscribe(
        (data: any) => {
        this.animes = data;
        console.log("Resultado: ", data);
    },
    (error) => {
      console.log("Error: ", error);
    });
  }

  search(query:string) : void {
    this.animeAPIService.searchAnimeAPI(query)
      .subscribe(
        (data: any[]) => {
        this.animes = data;
        console.log("Resultado: ", data);
    },
    (error) => {
      console.log("Error: ", error);
    });
  }

  filter() {
    switch (this.seleccionado) {
      case 'PrecioM': {
        this.sortPriceHighLow();
        break;
      }

      case 'Preciom': {
        this.sortPriceLowHigh();
        break;
      }

      case 'NameR': {
        this.sortName();
        break;
      }

      case 'Name': {
        this.sortNameReverse();
        break;
      }
    }
  }

  //SORTING METHODS
  sortPriceHighLow(){
    this.animes.sort((a, b) => {
      const priceA = a.rating;
      const priceB = b.rating;

      if (priceA > priceB) {
        return -1;
      }
      if (priceA < priceB) {
        return 1;
      }
      return 0;
    });
  }

  sortPriceLowHigh(){
    this.animes.sort((a, b) => {
      const priceA = a.rating;
      const priceB = b.rating;

      if (priceA < priceB) {
        return -1;
      }
      if (priceA > priceB) {
        return 1;
      }
      return 0;
    });
  }


  sortNameReverse(){
    this.animes.sort((a, b) => {
      const nombreA = a.title.toUpperCase();
      const nombreB = b.title.toUpperCase();

      if (nombreA > nombreB) {
        return -1;
      }
      if (nombreA < nombreB) {
        return 1;
      }
      return 0;
    });
  }

  sortName(){
    this.animes.sort((a, b) => {
      const nombreA = a.title.toUpperCase();
      const nombreB = b.title.toUpperCase();

      if (nombreA < nombreB) {
        return -1;
      }
      if (nombreA > nombreB) {
        return 1;
      }
      return 0;
    });
  }
}
