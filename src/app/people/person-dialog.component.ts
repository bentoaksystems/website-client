import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {LanguageService} from '../language.service';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.css']
})
export class PersonDialogComponent implements OnInit {
  lang: string;

  constructor(public dialogRef: MatDialogRef<PersonDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public langService: LanguageService) { }

  ngOnInit() {
    this.data.width -= 24;

    this.langService.lang$.subscribe(lang => this.lang = lang);
  }

}
