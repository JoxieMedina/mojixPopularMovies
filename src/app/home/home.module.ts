import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ToTmdbURLPipe } from '../pipes/to-tmdb-url.pipe';
import { ToTmdbScorePipe } from '../pipes/to-tmdb-score.pipe';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ToTmdbURLPipe, ToTmdbScorePipe]
})
export class HomePageModule {}
