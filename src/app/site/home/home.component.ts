import {Component, Inject, OnInit} from '@angular/core';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {WINDOW} from '../../shared/services/window.service';
import {SpinnerService} from '../../shared/services/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: any = [];
  slideShows: any = [];
  process: any = [];
  less_images = [];
  isMobile = false;
  intro = '';
  step = -1;

  isCollapsed = true;

  constructor(@Inject(WINDOW) private window,
              private getJsonFileService: GetJsonFileService, private responsiveService: ResponsiveService,
              private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.spinnerService.enable();
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.getJsonFileService.getTechnologyData()
      .then((res) => {
        this.slideShows = res;
        for (const s of this.slideShows) {
          if (s.title) {
            this.images.push({source: s.file.url, description: s.description, title: s.title, link: s.url});
          }
        }
        for (let i = 0; i < 4; i++) {
          this.less_images.push(this.images[i]);
        }
        this.images.splice(0, 4)

        this.spinnerService.disable();
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });

    // Our Process section
    this.getJsonFileService.getProcessData()
      .then((res: any) => {
        this.process = res;
        this.spinnerService.disable();
      })
      .catch(err => {
        console.error('Cannot get data from server: ', err);
      });

  }

  openPage(link) {
    this.window.open(link, '_blank');
  }

  // our Process
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
