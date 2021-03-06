import {Component, OnInit} from '@angular/core';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {SpinnerService} from '../../shared/services/spinner.service';
import { DictionaryService } from '../../shared/services/dictionary.service';
import { TranslatorComponent } from '../../shared/components/translator.component';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent extends TranslatorComponent implements OnInit {
  people: any = [];
  isMobile = false;
  constructor(private getJsonService: GetJsonFileService, private responsiveService: ResponsiveService,
              private spinnerService: SpinnerService, dictionaryService: DictionaryService) {
                super(dictionaryService);
  }

  ngOnInit() {
    this.spinnerService.enable();
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.getJsonService.getPeopleData()
      .then(res => {
        this.people = res;
        this.spinnerService.disable()
      })
      .catch(err => console.error('people data fetch failed', err));
  }

}
