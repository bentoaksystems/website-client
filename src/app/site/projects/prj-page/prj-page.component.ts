import {Component, Inject, OnInit} from '@angular/core';
import {ProjectService} from '../../../shared/services/project.service';
import {WINDOW} from '../../../shared/services/window.service';
import {ResponsiveService} from '../../../shared/services/responsive.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-prj-page',
  templateUrl: './prj-page.component.html',
  styleUrls: ['./prj-page.component.css']
})
export class PrjPageComponent implements OnInit {

  project: any = {};
  curWidth: number;
  curHeight: number;

  constructor(private projectService: ProjectService, @Inject(WINDOW) private window,
              protected router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.curWidth = this.window.innerWidth;
    this.curHeight = this.window.innerHeight;
    this.project = this.projectService.projectInfo;
  }
  backToProjectsPage() {
    this.router.navigate(['./projects']);
  }

}
