import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import {LanguageService} from '../../../shared/services/language.service';
import {WINDOW} from '../../../shared/services/window.service';
import {ProjectDialogComponent} from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input('project') project: any;
  width = 500;

  constructor(public langService: LanguageService, @Inject(WINDOW) private window,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.width = this.window.innerWidth;
    this.window.onresize = (e) => {
      this.width = this.window.innerWidth;
    };
  }

  showDetails() {
    const _width = this.window.innerWidth;
    const _height = this.window.innerHeight;

    this.dialog.open(ProjectDialogComponent, {
      width: _width * 0.8 + 'px',
      height: _height * 0.7 + 'px',
      data: {
        project: this.project,
        width: _width * 0.8,
        height: _height * 0.7
      }
    })
  }
}
