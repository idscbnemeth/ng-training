import { Injectable, Injector } from '@angular/core';
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

@Injectable()
export class MyMissingTemplateHandler implements MissingTranslationHandler {
    handle(params:MissingTranslationHandlerParams) {
        return 'Translation not available for ' + params.key;
    }
}
