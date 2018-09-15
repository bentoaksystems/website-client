import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";

import {LanguageService} from "../language.service";
import {WINDOW} from "../window.service";
import {ProjectDialogComponent} from "./project-dialog.component";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input('project') project: any;
  width: number = 500;

  constructor(public langService: LanguageService, @Inject(WINDOW) private window,
    public dialog: MatDialog) {}

  ngOnInit() {
    this.width = this.window.innerWidth;
    this.window.onresize = (e) => {
      this.width = this.window.innerWidth;
    };
  }

  showDetails() {
    let _width = this.window.innerWidth;
    let _height = this.window.innerHeight;

    this.dialog.open(ProjectDialogComponent, {
      width: _width * 0.8 + 'px',
      height: _height * 0.8 + 'px',
      data: {
        project: this.project,
        width: _width * 0.8,
        height: _height * 0.8
      }
    })
  }
}
