import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  UserRoutingModule,
  LoginComponent,
  RegistrationComponent,
  UserService
} from './user.barrel';
import { TranslateModule, MissingTranslationHandler } from '@ngx-translate/core';
import { MyMissingTemplateHandler } from '../shared/handlers/missingtemplate.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    TranslateModule.forChild({
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTemplateHandler}
    })
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
