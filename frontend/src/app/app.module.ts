import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AnimeComponent } from './components/anime/anime.component';
import { AnimeDetailsComponent } from './components/anime-details/anime-details.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { HomeComponent } from './components/home/home.component';
import { TopAnimeListComponent } from './components/top-anime-list/top-anime-list.component';
import { LoginComponent } from './components/login/login.component';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    AnimeComponent,
    AnimeDetailsComponent,
    AnimeListComponent,
    HomeComponent,
    TopAnimeListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientJsonpModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    InfiniteScrollModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    TagModule,
    ScrollTopModule,
    InputTextModule,
    SkeletonModule,
    HttpClientModule,
    DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
