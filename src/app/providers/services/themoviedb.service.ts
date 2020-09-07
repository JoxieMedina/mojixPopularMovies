import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  constructor(public http: HttpClient) { 
  }

  getPopularByPage(page: number) : Observable<TMDBPopularResponse> {
    let callURL = `${environment.TMDB_API_BASE_URL}/movie/popular?page=${page}`;
    return this.http.get<TMDBPopularResponse>(callURL).pipe(
      map(res => res)
    );
  }

}
