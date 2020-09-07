import { NgModule, ModuleWithProviders } from '@angular/core';
import { ToTmdbURLPipe } from './pipes/to-tmdb-url.pipe';
import { ToTmdbScorePipe } from './pipes/to-tmdb-score.pipe';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    ToTmdbURLPipe,
    ToTmdbScorePipe
  ],
  exports: [
    ToTmdbURLPipe,
    ToTmdbScorePipe,
    TranslateModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}