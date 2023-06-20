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
      this.animes =  [
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
        },
        {
          "id": "6d062a1e-339c-463f-b9ab-75326aa6d50e",
          "title": "Ginga Eiyuu Densetsu",
          "title_english": "Legend of the Galactic Heroes",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/13/13225l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/13/13225.jpg"
          }
        },
        {
          "id": "924817c5-1822-44fa-8b9c-136006b19fa9",
          "title": "Fruits Basket: The Final",
          "title_english": "Fruits Basket: The Final Season",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1085/114792l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1085/114792.jpg"
          }
        },
        {
          "id": "9a32e350-f071-4582-b31f-cd84fe263955",
          "title": "Gintama.",
          "title_english": "Gintama Season 5",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/3/83528l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/3/83528.jpg"
          }
        },
        {
          "id": "dd60cba6-59e0-4ef0-8402-091ade2647ba",
          "title": "Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai",
          "title_english": "Kaguya-sama: Love is War - The First Kiss That Never Ends",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1670/130060l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1670/130060.jpg"
          }
        },
        {
          "id": "490b1934-1ade-4e8b-aeff-d8b9c73bc96a",
          "title": "3-gatsu no Lion 2nd Season",
          "title_english": "March Comes In Like A Lion 2nd Season",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/3/88469l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/3/88469.jpg"
          }
        },
        {
          "id": "3ac2f545-fc30-4ff9-ad24-5b1e67425ec5",
          "title": "Clannad: After Story",
          "title_english": "Clannad: After Story",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1299/110774l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1299/110774.jpg"
          }
        },
        {
          "id": "888a0d2c-3e6d-437e-a693-d4f88f93acd9",
          "title": "Gintama",
          "title_english": "Gintama",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/10/73274l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/10/73274.jpg"
          }
        },
        {
          "id": "9dcbe453-8e11-413f-9c95-da3f4a8da99f",
          "title": "Koe no Katachi",
          "title_english": "A Silent Voice",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1122/96435l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1122/96435.jpg"
          }
        },
        {
          "id": "6129154d-7ab0-4d06-8ef5-c598cc7dd1f8",
          "title": "Bocchi the Rock!",
          "title_english": "Bocchi the Rock!",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1448/127956l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1448/127956.jpg"
          }
        },
        {
          "id": "2cd575e9-bc16-4cfd-b705-80f95a9331cc",
          "title": "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare",
          "title_english": "",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/10/51723l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/10/51723.jpg"
          }
        },
        {
          "id": "61b20b4f-eb58-4bd2-97b0-c3a8ca53cb13",
          "title": "Code Geass: Hangyaku no Lelouch R2",
          "title_english": "Code Geass: Lelouch of the Rebellion R2",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/4/9391l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/4/9391.jpg"
          }
        },
        {
          "id": "00174588-643c-49b5-a488-d1dc48d65365",
          "title": "Violet Evergarden Movie",
          "title_english": "Violet Evergarden the Movie",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1825/110716l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1825/110716.jpg"
          }
        },
        {
          "id": "0257eee6-73c8-44f5-b6ec-a7d4e92377e4",
          "title": "Owarimonogatari 2nd Season",
          "title_english": "Owarimonogatari Second Season",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/6/87322l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/6/87322.jpg"
          }
        },
        {
          "id": "e696233b-6981-4cc2-b9a6-125e3dfa39da",
          "title": "Gintama.: Shirogane no Tamashii-hen - Kouhan-sen",
          "title_english": "Gintama.: Silver Soul Arc - Second Half War",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1776/96566l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1776/96566.jpg"
          }
        },
        {
          "id": "d5b32ada-89f3-446d-aa2d-8b5f23a06784",
          "title": "Monster",
          "title_english": "Monster",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/10/18793l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/10/18793.jpg"
          }
        },
        {
          "id": "7a401d6a-f3aa-4e90-a374-b1c2f71748bf",
          "title": "Kimi no Na wa.",
          "title_english": "Your Name.",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/5/87048l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/5/87048.jpg"
          }
        },
        {
          "id": "6298a8e4-7289-46e8-b19f-8fe29d2a7b97",
          "title": "Kimetsu no Yaiba: Yuukaku-hen",
          "title_english": "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1908/120036l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1908/120036.jpg"
          }
        },
        {
          "id": "2c670fd9-5b1d-412c-89e4-f9e9e9f88e87",
          "title": "Kingdom 3rd Season",
          "title_english": "Kingdom: Season 3",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1443/111830l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1443/111830.jpg"
          }
        },
        {
          "id": "81ef94ca-a841-4005-85b6-59ffd00e2d7c",
          "title": "Gintama.: Shirogane no Tamashii-hen",
          "title_english": "Gintama.: Silver Soul Arc",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/12/89603l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/12/89603.jpg"
          }
        },
        {
          "id": "e44a1445-5f54-4a7a-82b3-68e3551aa481",
          "title": "Mob Psycho 100 II",
          "title_english": "Mob Psycho 100 II",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1918/96303l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1918/96303.jpg"
          }
        },
        {
          "id": "aaaa274a-35eb-4414-b221-5aa32ed210e6",
          "title": "Shingeki no Kyojin: The Final Season",
          "title_english": "Attack on Titan: The Final Season",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1000/110531l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1000/110531.jpg"
          }
        },
        {
          "id": "d5d0381b-c52c-46a7-b9f4-7d0988f0dd2b",
          "title": "Kizumonogatari III: Reiketsu-hen",
          "title_english": "Kizumonogatari Part 3: Cold-Blooded",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1084/112813l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1084/112813.jpg"
          }
        },
        {
          "id": "63d6d90a-7ab9-4ecc-9647-322ea7742b29",
          "title": "Sen to Chihiro no Kamikakushi",
          "title_english": "Spirited Away",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/6/79597l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/6/79597.jpg"
          }
        },
        {
          "id": "6c7c0ab0-e320-44e1-a45d-633c94de97d9",
          "title": "Haikyuu!! Karasuno Koukou vs. Shiratorizawa Gakuen Koukou",
          "title_english": "Haikyu!! 3rd Season",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/7/81992l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/7/81992.jpg"
          }
        },
        {
          "id": "8ee4ce00-0a72-49e2-956e-04a19772a770",
          "title": "Vinland Saga Season 2",
          "title_english": "Vinland Saga Season 2",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1170/124312l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1170/124312.jpg"
          }
        },
        {
          "id": "224c7199-723d-44c0-9812-c74a69c0d7dc",
          "title": "Monogatari Series: Second Season",
          "title_english": "Monogatari Series: Second Season",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1807/121534l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1807/121534.jpg"
          }
        },
        {
          "id": "87c873f0-dd75-4053-a1dc-c6eac192a399",
          "title": "Shingeki no Kyojin: The Final Season Part 2",
          "title_english": "Attack on Titan: The Final Season Part 2",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1948/120625l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1948/120625.jpg"
          }
        },
        {
          "id": "3952e3e0-0854-4f43-9070-df2caca00901",
          "title": "Shiguang Dailiren",
          "title_english": "Link Click",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1135/114867l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1135/114867.jpg"
          }
        },
        {
          "id": "ffd4bdaa-2613-476b-af1f-fee5a87c1d47",
          "title": "Cowboy Bebop",
          "title_english": "Cowboy Bebop",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/4/19644l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/4/19644.jpg"
          }
        },
        {
          "id": "3cc87d43-75fd-46fb-9188-ae95e7cd8260",
          "title": "Hajime no Ippo",
          "title_english": "Fighting Spirit",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/4/86334l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/4/86334.jpg"
          }
        },
        {
          "id": "03ec5350-a3f5-4a9b-92d6-8019736a582b",
          "title": "Mob Psycho 100 III",
          "title_english": "Mob Psycho 100 III",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1228/125011l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1228/125011.jpg"
          }
        },
        {
          "id": "91acad6f-a1f6-4bee-be70-d45849ee08a3",
          "title": "Kingdom 4th Season",
          "title_english": "Kingdom: Season 4",
          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1566/122794l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1566/122794.jpg"
          }
        },
        {
          "id": "f6772010-34e7-437e-bdc8-83d134322003",
          "title": "Mushishi Zoku Shou 2nd Season",
          "title_english": "Mushi-shi: Next Passage Part 2",

          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/9/68095l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/9/68095.jpg"
          }
        },
        {
          "id": "b84a86eb-98dc-47f4-8331-14d8495015da",
          "title": "Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen",
          "title_english": "Descending Stories: Showa Genroku Rakugo Shinju",

          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1493/124765l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1493/124765.jpg"
          }
        },
        {
          "id": "776a7136-0ba6-4013-8118-d40b95dbf1b0",
          "title": "Vinland Saga",
          "title_english": "",

          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1500/103005l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1500/103005.jpg"
          }
        },
        {
          "id": "5964da16-2031-4a17-849e-b79c011fd110",
          "title": "86 Part 2",
          "title_english": "86 Eighty-Six Part 2",

          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1321/117508l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1321/117508.jpg"
          }
        },
        {
          "id": "f72fd90b-46a4-4c22-8832-67ac99ef341d",
          "title": "Ashita no Joe 2",
          "title_english": "Tomorrow's Joe 2",

          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/3/45028l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/3/45028.jpg"
          }
        },
        {
          "id": "5386c9ab-0292-4f6a-a3ab-f8ccf9d8dcea",
          "title": "Mushoku Tensei: Isekai Ittara Honki Dasu Part 2",
          "title_english": "Mushoku Tensei: Jobless Reincarnation Part 2",

          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1028/117777l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1028/117777.jpg"
          }
        },
        {
          "id": "5be41ff3-32b2-4e58-8561-16ec09eb12cd",
          "title": "Rurouni Kenshin: Meiji Kenkaku Romantan - Tsuioku-hen",
          "title_english": "Samurai X: Trust and Betrayal",

          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/1391/120839l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/1391/120839.jpg"
          }
        },
        {
          "id": "8f3bdfb2-d22b-4b42-a4f5-bdf9954949a9",
          "title": "Mushishi Zoku Shou",
          "title_english": "Mushi-shi: Next Passage Part 1",

          "main_picture": {
            "large": "https://api-cdn.myanimelist.net/images/anime/13/58533l.jpg",
            "medium": "https://api-cdn.myanimelist.net/images/anime/13/58533.jpg"
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
