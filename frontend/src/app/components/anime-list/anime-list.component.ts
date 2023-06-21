import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Anime } from 'src/app/services/anime';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimeListComponent {
  animes: Anime[] = [];
  @Input() startComponent: boolean = false;

  updating: boolean = false;
  responsiveOptions: any;
  pageSize: number = 10;
  from: number = 0;
  to: number = this.pageSize;
  keyword: string = '';
  productId: string = "1";

  constructor() {
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
}
