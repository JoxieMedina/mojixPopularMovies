import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable()
export class TMDBInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(environment.TMDB_API_BASE_URL)) {
      return next.handle(req);
    }
    console.warn("TMDBInterceptor");

    // Add the API KEY on each request to The Movie DB API
    const httpsReq = req.clone({
      url: `${req.url}&api_key=${environment.THE_MOVIE_DB_API_KEY}`
    });

    return next.handle(httpsReq);
  }
}