import { Component } from '@angular/core';
import { ThemoviedbService, TMDBPopularResponse, TMDBPopularItem } from '../providers/services/themoviedb.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tmdbPopularResponse: TMDBPopularResponse;
  popularMovies: TMDBPopularItem[] = [];
  pageNumber: number = 1;

  constructor(private themoviedbService: ThemoviedbService, private router: Router, public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.use('en');

    if (themoviedbService.savedPopularMovies) {
      this.tmdbPopularResponse = themoviedbService.savedPopularMovies;
      this.popularMovies = this.tmdbPopularResponse.results;
    }


    this.fetchPopularMovies();
  }

  onLangChange(value) {
    this.translate.use(value)
    this.pageNumber = 1;
    this.popularMovies = [];
    this.fetchPopularMovies(false, null, value);
  }

  private fetchPopularMovies(forInfinity: boolean = false, event?, lang: string = 'en') {
    if (forInfinity) {
      this.pageNumber += 1;
    }
    this.themoviedbService.getPopularByPage(this.pageNumber, lang).subscribe((popularResponse: TMDBPopularResponse) => {
      if (this.pageNumber === 1) {
        this.themoviedbService.saveForOfflineUse(popularResponse);
      }
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
    this.router.navigate(['/movie'], { state: { movie, lang: this.translate.currentLang } })
  }

}
