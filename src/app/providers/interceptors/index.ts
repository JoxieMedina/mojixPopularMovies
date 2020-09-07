import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TMDBInterceptor } from './tmdb-interceptor';

export const CustomHttpInterceptors = [
    { provide: HTTP_INTERCEPTORS, useClass: TMDBInterceptor, multi: true }
]