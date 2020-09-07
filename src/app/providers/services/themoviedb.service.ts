import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';


export interface TMDBPopularItem {
  poster_path: string,
  adult: boolean,
  overview: string,
  release_date: string,
  genre_ids: number[],
  id: number,
  original_title: string,
  original_language: string,
  title: string,
  backdrop_path: string,
  popularity: number,
  vote_count: number,
  video: boolean,
  vote_average: number
};

export interface TMDBPopularResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: TMDBPopularItem[];
}

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {
  savedStorageKey: string = 'TMDB_MOJIX_POPULAR';
  savedPopularMovies: TMDBPopularResponse;

  constructor(public http: HttpClient, private storage: Storage) { 
    storage.get(this.savedStorageKey).then((val) => {
      this.savedPopularMovies = JSON.parse(val);
    });
  }

  getPopularByPage(page: number, lang: string = 'en') : Observable<TMDBPopularResponse> {
    let callURL = `${environment.TMDB_API_BASE_URL}/movie/popular?page=${page}&language=${lang}`;
    return this.http.get<TMDBPopularResponse>(callURL).pipe(
      map(res => res)
    );
  }

  saveForOfflineUse(tmdbPopularResponse: TMDBPopularResponse) {
    this.storage.set(this.savedStorageKey, JSON.stringify(tmdbPopularResponse));
  }

}
