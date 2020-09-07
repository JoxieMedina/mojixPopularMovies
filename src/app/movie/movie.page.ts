import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TMDBPopularItem } from '../providers/services/themoviedb.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  movieItem: TMDBPopularItem

  constructor(private router: Router) {
    this.movieItem = router.getCurrentNavigation().extras.state as TMDBPopularItem;
    console.log(this.movieItem);
   }

  ngOnInit() {
  }

}
