import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { skip } from 'rxjs';
import { AnimeAPIService } from 'src/app/services/anime-api.service';
import { Anime } from 'src/app/services/anime';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.sass'],
  providers: [AnimeAPIService]
})

export class AnimeDetailsComponent implements OnInit {
  title = '';
  main_picture = '';
  rating = '';
  synopsis = '';
  genre: any[] = [];
  episodes = '';
  status = '';
  start_date: Date | undefined;
  end_date: Date | undefined;
  userStatus: any[] | undefined;
  selectedStatus: any | undefined;
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private animeAPIService: AnimeAPIService
  ) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
      this.main_picture = params['main_picture'];
      this.synopsis = params['synopsis'];
      this.genre = params['genre'];
      this.episodes = params['episodes'];
      this.rating = params['rating'];
      this.status = params['status'];
      this.start_date = params['start_date'];
      this.end_date = params['end_date'];
    });

    this.userStatus = [
      { name: 'Watching', code: 'NY' },
      { name: 'Planning to Watch', code: 'RM' },
      { name: 'Completed', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
  }
  ratingConverter(rating: string): number | null {
    const regex = /^([\d,.]+)/;
    const match = rating.match(regex);

    if (match) {
      const numero = parseFloat(match[0].replace(',', '.'));
      return !isNaN(numero) ? numero : null;
    }

    return null;
  }
  starGenerator(star: string): string {
    let html = '';
    let num = this.ratingConverter(star);
    let valoration: { [key: string]: string } = {
      '1': 'Bad',
      '2': 'Not Bad',
      '3': 'Normal',
      '4': 'Good',
      '5': 'Very Good'
    };
    if (num != null) {
      html += '<h2>'+ valoration[Math.floor(num).toString()] +'</h2>';

      if (!Number.isInteger(num)) {
        for (let i = 0; i < 5; i++) {
          if (i < Math.floor(num)) {
            html += '<i class="fas fa-star"></i>';
          }
          else if(i==Math.floor(num)){
            html += '<i class="fas fa-star-half-alt"></i>';
          }
          else {
            html += '<i class="fal fa-star"></i>';
          }
        }
      }
      else {
        for (let i = 0; i < Math.floor(num); i++) {
          if (i < Math.floor(num)) {
            html += '<i class="fas fa-star"></i>';
          }else {
            html += '<i class="fal fa-star"></i>';
          }
        }
      }
    }
    return html;
  }

  goBack(): void {
    this.location.back();
  }
}
