import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { skip } from 'rxjs';
import { AnimeAPIService } from 'src/app/services/anime-api.service';
import { Anime, Status } from 'src/app/services/anime';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.sass'],
  providers: [AnimeAPIService]
})

export class AnimeDetailsComponent implements OnInit {
  title = '';
  id = '';
  main_picture = '';
  rating = '';
  synopsis = '';
  genres: any[] = [];
  episodes = '';
  status = '';
  start_date: Date | undefined;
  end_date: Date | undefined;
  userStatus: any[] | undefined;
  selectedStatus: any | undefined;
  visible: boolean = false;

  STATUSES: Status[] = [Status.WATCHING, Status.PLAN_TO_WATCH, Status.COMPLETED];

    showDialog() {
        this.visible = true;
    }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private animeAPIService: AnimeAPIService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.id = params['id'];
      this.title = params['title'];
      this.main_picture = params['main_picture'];
      this.synopsis = params['synopsis'];
      this.genres = params['genres'];
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
  saveData(): void {
    console.log(this.id);
    this.authService.anadirAnime(this.authService.user.id, this.id)
      .subscribe(
        (data: any) => {
          console.log("Resultado: " + data);
        },
        (error) => {
          console.error("Error al obtener el producto:", error);
        }
      );
      this.visible = false;
  }
  goBack(): void {
    this.location.back();
  }
}
