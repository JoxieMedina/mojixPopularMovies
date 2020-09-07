import { Component } from '@angular/core';
import { ThemoviedbService, TMDBPopularResponse, TMDBPopularItem } from '../providers/services/themoviedb.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tmdbPopularResponse: TMDBPopularResponse;
  popularMovies: TMDBPopularItem[] = [];
  pageNumber: number = 1;

  constructor(private themoviedbService: ThemoviedbService, private router: Router) {
    this.fetchPopularMovies();
  }



  private fetchPopularMovies(forInfinity: boolean = false, event?) {
    if (forInfinity) {
      this.pageNumber += 1;
    }
    this.themoviedbService.getPopularByPage(this.pageNumber).subscribe((popularResponse: TMDBPopularResponse) => {
      this.tmdbPopularResponse = popularResponse;
      this.popularMovies = [...this.popularMovies, ...popularResponse.results];
      if (forInfinity) {
        event.target.complete();
        if (this.pageNumber === this.tmdbPopularResponse.total_pages) {
          event.target.disabled = true;
        }
      }
    });
  }

  doInfinite(event) {
    this.fetchPopularMovies(true, event);
  }


  goToMovieDetails(movie: TMDBPopularItem) {
    this.router.navigate(['/movie'], { state: movie })
  }

}
