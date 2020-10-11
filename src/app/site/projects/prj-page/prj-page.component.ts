import {Component, Inject, OnInit} from '@angular/core';
import {ProjectService} from '../../../shared/services/project.service';
import {WINDOW} from '../../../shared/services/window.service';
import {ResponsiveService} from '../../../shared/services/responsive.service';
import {ActivatedRoute, Router} from '@angular/router';
import { DictionaryService } from '../../../shared/services/dictionary.service';
import { TranslatorComponent } from '../../../shared/components/translator.component';
@Component({
  selector: 'app-prj-page',
  templateUrl: './prj-page.component.html',
  styleUrls: ['./prj-page.component.css']
})
export class PrjPageComponent extends TranslatorComponent implements OnInit {

  project: any = {};
  curWidth: number;
  curHeight: number;

  constructor(private projectService: ProjectService, @Inject(WINDOW) private window,
              protected router: Router, private route: ActivatedRoute,
              dictionaryService: DictionaryService) {
                super(dictionaryService);
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
