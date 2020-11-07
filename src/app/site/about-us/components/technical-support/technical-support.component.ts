import {Component, Input, OnInit} from '@angular/core';
import {ResponsiveService} from '../../../../shared/services/responsive.service';
import * as marked from 'marked';
import { DictionaryService } from '../../../../shared/services/dictionary.service';
import { TranslatorComponent } from '../../../../shared/components/translator.component';

@Component({
  selector: 'app-technical-support',
  templateUrl: './technical-support.component.html',
  styleUrls: ['./technical-support.component.css']
})

export class TechnicalSupportComponent  extends TranslatorComponent implements OnInit {
  techsuppInfo;
  desc = null;
  isMobile = false;

    @Input('techsuppInfo') set techsupp_Info (data) {
        if(!data) return;
        this.techsuppInfo = data.filter(x => x.title === 'Technical Support')[0];
        this.desc = this.techsuppInfo.description;
      };

    constructor(
      private responsiveService: ResponsiveService,
      dictionaryService: DictionaryService,
    ) {
      super(dictionaryService);
    }

    ngOnInit() {
        this.isMobile = this.responsiveService.isMobile;
        this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);
    }

}
