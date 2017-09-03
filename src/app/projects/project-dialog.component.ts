import {Component, Inject, OnInit} from '@angular/core';

import {LanguageService} from "../language.service";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {

  constructor(public langService: LanguageService, public dialogRef: MdDialogRef<ProjectDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.data.width -= 24;
  }

}
