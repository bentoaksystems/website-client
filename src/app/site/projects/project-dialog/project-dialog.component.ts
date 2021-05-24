import {Component, Inject, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { DictionaryService } from '../../../shared/services/dictionary.service';
import { TranslatorComponent } from '../../../shared/components/translator.component';
@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent extends TranslatorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjectDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              dictionaryService: DictionaryService) {
                super(dictionaryService);
  }

  ngOnInit() {
  }

}
