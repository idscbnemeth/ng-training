import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  TaskRoutingModule,
  TaskListComponent,
  TaskListItemComponent,
  TaskService,
  AgePipe
} from './task.barrel';
import { TranslateModule, MissingTranslationHandler } from '@ngx-translate/core';
import { MyMissingTemplateHandler } from '../shared/handlers/missingtemplate.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule,
    TranslateModule.forChild({
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTemplateHandler}
    })
  ],
  declarations: [
    TaskListComponent,
    TaskListItemComponent,
    AgePipe
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
