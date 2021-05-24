import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {LanguageService} from '../../../shared/services/language.service';
import {ResponsiveService} from '../../../shared/services/responsive.service';
import { DictionaryService } from '../../../shared/services/dictionary.service';
import { TranslatorComponent } from '../../../shared/components/translator.component';
@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.css']
})
export class PersonDialogComponent  extends TranslatorComponent implements OnInit {
  lang: string;
  isMobile = false;
  constructor(public dialogRef: MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public langService: LanguageService, private responsiveService: ResponsiveService,
    dictionaryService: DictionaryService) {
      super(dictionaryService);
    }

  ngOnInit() {
    this.data.width -= 24;
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.langService.lang$.subscribe(lang => this.lang = lang);
  }
}
