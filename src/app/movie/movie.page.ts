import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TMDBPopularItem } from '../providers/services/themoviedb.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  movieItem: TMDBPopularItem

  constructor(router: Router,  public translate: TranslateService) {
    const { movie , lang } = router.getCurrentNavigation().extras.state;
    this.movieItem = movie as TMDBPopularItem;
    translate.use(lang);
   }

  ngOnInit() {
  }

}
