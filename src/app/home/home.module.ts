import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './components/home/home.component';
import { TranslateModule, MissingTranslationHandler } from '@ngx-translate/core';
import { MyMissingTemplateHandler } from '../shared/handlers/missingtemplate.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule.forChild({
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTemplateHandler}
    })
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
