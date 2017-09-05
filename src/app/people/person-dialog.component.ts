import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";

import {LanguageService} from "../language.service";

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.css']
})
export class PersonDialogComponent implements OnInit {
  lang: string;

  constructor(public dialogRef: MdDialogRef<PersonDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any, public langService: LanguageService) { }

  ngOnInit() {
    this.data.width -= 24;

    this.langService.lang$.subscribe(lang => this.lang = lang);
  }

}
