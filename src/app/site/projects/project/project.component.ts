import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import {LanguageService} from '../../../shared/services/language.service';
import {WINDOW} from '../../../shared/services/window.service';
import {ProjectDialogComponent} from '../project-dialog/project-dialog.component';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../../shared/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input('project') project: any;
  @Input() isMobile: boolean;
  width = 500;

  constructor(public langService: LanguageService, @Inject(WINDOW) private window,
              public dialog: MatDialog, protected router: Router, private route: ActivatedRoute, private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.projectInfo = this.project;
    this.width = this.window.innerWidth;
    this.window.onresize = (e) => {
      this.width = this.window.innerWidth;
    };
  }

  showDetails() {
    const _width = this.window.innerWidth;
    const _height = this.window.innerHeight;
    if (!this.isMobile) {
      this.dialog.open(ProjectDialogComponent, {
        width: _width * 0.8 + 'px',
        height: _height * 0.7 + 'px',
        data: {
          project: this.project,
          width: _width * 0.8,
          height: _height * 0.7
        }
      })
    } else {
      this.projectService.projectInfo = this.project;
      this.router.navigate(['./projectPage'], {relativeTo : this.route});
    }
  }
}
