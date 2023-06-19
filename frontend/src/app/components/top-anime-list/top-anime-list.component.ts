import { Component, OnInit } from '@angular/core';
import { TopAnimeScrappingService } from 'src/app/services/top-anime-scrapping.service';
import { Anime } from 'src/app/services/anime';

@Component({
  selector: 'app-topanime-list',
  templateUrl: './top-anime-list.component.html',
  styleUrls: ['./top-anime-list.component.sass'],
  providers: [ TopAnimeScrappingService]
})
export class TopAnimeListComponent implements OnInit {
  animes : Anime[] = [];
  responsiveOptions : any;

  constructor(
    private topAnimeAPIService: TopAnimeScrappingService
  ) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit() {
    this.animes = this.topAnimeAPIService.getTopAnime();
  }
}





