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
  layout: string = 'list';

  groupOfAnimes : Anime[][] = [];

  constructor(private animeAPIService: AnimeAPIService) { }

  ngOnInit(): void {
    this.animeAPIService.getAnimesAPI()
      .subscribe(
        (data: any) => {
        this.animes = data.anime;
        console.log("Resultado: ", data);
    },
    (error) => {
      this.animes = [
        {
          "id": "dcda6a44-fb94-4028-87ac-450b92395446",
          "title": "Fullmetal Alchemist: Brotherhood",
          "title_english": "Fullmetal Alchemist: Brotherhood",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1208/94745l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1208/94745.jpg"
          }
        },
        {
          "id": "48e7ab57-64be-47f3-92bc-c5bbbaeb6d1b",
          "title": "Bleach: Sennen Kessen-hen",
          "title_english": "Bleach: Thousand-Year Blood War",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1764/126627l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1764/126627.jpg"
          }
        },
        {
          "id": "77562d42-36ef-4364-b1df-c52cb45773cf",
          "title": "Steins;Gate",
          "title_english": "Steins;Gate",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1935/127974l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1935/127974.jpg"
          }
        },
        {
          "id": "8495a65a-827d-48e9-a517-9308b220711a",
          "title": "Gintama°",
          "title_english": "Gintama Season 4",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/3/72078l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/3/72078.jpg"
          }
        },
        {
          "id": "63fb9253-823e-41ea-87f7-a2180c359154",
          "title": "Kaguya-sama wa Kokurasetai: Ultra Romantic",
          "title_english": "Kaguya-sama: Love is War - Ultra Romantic",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1160/122627l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1160/122627.jpg"
          }
        },
        {
          "id": "0f5235d5-e6ab-4e36-9be0-bc1184a4dcd7",
          "title": "Shingeki no Kyojin Season 3 Part 2",
          "title_english": "Attack on Titan Season 3 Part 2",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1517/100633l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1517/100633.jpg"
          }
        },
        {
          "id": "0591127f-8b2f-4199-bd46-cc22aec1eddb",
          "title": "Gintama: The Final",
          "title_english": "Gintama: The Very Final",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1988/113791l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1988/113791.jpg"
          }
        },
        {
          "id": "6d4389cd-52c8-4c89-86ac-b3141c38d301",
          "title": "Gintama'",
          "title_english": "Gintama Season 2",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/4/50361l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/4/50361.jpg"
          }
        },
        {
          "id": "d616f065-13b7-4bb3-bda4-4f7a9366be99",
          "title": "Hunter x Hunter (2011)",
          "title_english": "Hunter x Hunter",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1337/99013l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1337/99013.jpg"
          }
        },
        {
          "id": "e44ffa70-15e3-46a7-8ddb-a8c7754e54d1",
          "title": "Gintama': Enchousen",
          "title_english": "Gintama: Enchousen",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1452/123686l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1452/123686.jpg"
          }
        }
      ];
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

      // if (priceA > priceB) {
      //   return -1;
      // }
      // if (priceA < priceB) {
      //   return 1;
      // }
      return 0;
    });
  }

  sortPriceLowHigh(){
    this.animes.sort((a, b) => {
      const priceA = a.rating;
      const priceB = b.rating;

      // if (priceA < priceB) {
      //   return -1;
      // }
      // if (priceA > priceB) {
      //   return 1;
      // }
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
