import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviePageRoutingModule } from './movie-routing.module';

import { MoviePage } from './movie.page';
import { ToTmdbURLPipe } from '../pipes/to-tmdb-url.pipe';
import { ToTmdbScorePipe } from '../pipes/to-tmdb-score.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviePageRoutingModule
  ],
  declarations: [MoviePage, ToTmdbURLPipe, ToTmdbScorePipe]
})
export class MoviePageModule {}
