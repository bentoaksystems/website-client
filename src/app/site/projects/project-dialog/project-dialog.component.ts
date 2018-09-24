import {Component, Inject, OnInit} from '@angular/core';

import {LanguageService} from "../../../shared/services/language.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {
  lang: string

  constructor(public langService: LanguageService, public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.langService.lang$.subscribe(lang => this.lang = lang);

    // this.data.width -= 24;
  }

}
