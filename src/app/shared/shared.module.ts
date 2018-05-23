import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  NotFoundComponent,
  NavigationComponent,
  ApiService,
  AuthService,
  AuthGuard
} from './shared.barrel';
import { LanguageComponent } from './components/language/language.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader, MissingTranslationHandler} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MyMissingTemplateHandler } from './handlers/missingtemplate.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
            deps: [HttpClient]
        },
        missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTemplateHandler}
    })
  ],
  exports: [
    NotFoundComponent,
    NavigationComponent,
    LanguageComponent,
    TranslateModule
  ],
  declarations: [
    NotFoundComponent,
    NavigationComponent,
    LanguageComponent
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard
  ]
})
export class SharedModule { }
