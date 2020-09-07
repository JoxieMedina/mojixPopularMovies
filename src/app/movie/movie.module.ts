import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviePageRoutingModule } from './movie-routing.module';
import { SharedModule } from '../shared.module';
import { MoviePage } from './movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MoviePageRoutingModule
  ],
  declarations: [MoviePage]
})
export class MoviePageModule {}
