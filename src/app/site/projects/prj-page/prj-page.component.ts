import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../shared/services/project.service';

@Component({
  selector: 'app-prj-page',
  templateUrl: './prj-page.component.html',
  styleUrls: ['./prj-page.component.css']
})
export class PrjPageComponent implements OnInit {

  project: any = {};

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.project = this.projectService.projectInfo;
  }

}
