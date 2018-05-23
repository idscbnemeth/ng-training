import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  public lang = 'hu';

  constructor(public translate: TranslateService) {
    translate.addLangs(['hu', 'en']);
    translate.setDefaultLang(this.lang);
    translate.use(this.lang);
  }

  ngOnInit() {
  }

  public changelanguage(newLang: string) {
    this.lang = newLang;
    this.translate.use(this.lang);
  }

}
