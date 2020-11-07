import {Component, OnInit} from '@angular/core';
import * as marked from 'marked';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {SpinnerService} from '../../shared/services/spinner.service';
import {ScrollService} from '../../shared/services/scroll.service';
import { DictionaryService } from '../../shared/services/dictionary.service';
import { TranslatorComponent } from '../../shared/components/translator.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent extends TranslatorComponent implements OnInit {
  results: any = null;
  desc = null;
  isMobile = false;
  bentoakData;

  constructor(
    private getJsonFileService: GetJsonFileService,
    private responsiveService: ResponsiveService,
    private spinnerService: SpinnerService,
    private scrollService: ScrollService,
    dictionaryService: DictionaryService) {
      super(dictionaryService);
  }

  ngOnInit() {
    this.spinnerService.enable();
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.getJsonFileService.getAboutUsData()
      .then((details) => {
        this.results = details;
        this.bentoakData = this.results.filter(x => x.title === 'Bent Oak Systems')[0];
        this.bentoakData.description = this.bentoakData.description;
        this.spinnerService.disable();
        if (this.scrollService.position !== '') {
           this.scrollService.triggerScrollTo();
         }
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });
  }
}
