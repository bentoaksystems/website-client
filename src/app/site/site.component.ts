import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {WINDOW} from '../shared/services/window.service';
import {ResponsiveService} from '../shared/services/responsive.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  height: number;
  width: number;
  isMobile = false;
  curWidth: number;
  curHeight: number;

  constructor(@Inject(WINDOW) private window, private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    this.curWidth = this.window.innerWidth;
    this.curHeight = this.window.innerHeight;
    this.isMobile = this.isMobileCalc();
    this.updateResponsiveService();
    this.onResize(null, this.curWidth, this.curHeight);
  }

  private updateResponsiveService() {
    [this.responsiveService.curWidth, this.responsiveService.curHeight, this.responsiveService.isMobile] =
      [this.curWidth, this.curHeight, this.isMobile];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event, width?, height?) {
    const [w, h] = [event ? event.target.innerWidth : width, event ? event.target.innerHeight : height];
    if (this.curWidth !== w || this.curHeight !== h) {
      [this.curWidth, this.curHeight] = [w, h];
      this.updateResponsiveService();
      this.responsiveService.resize$.next([w, h]);
    }
    if (this.isMobile !== this.isMobileCalc(w, h)) {
      this.responsiveService.switch$.next(this.isMobileCalc(w, h));
      this.isMobile = this.isMobileCalc(w, h);
      this.responsiveService.isMobile = this.isMobile;
    }
  }

  isMobileCalc(width = this.curWidth, height = this.curHeight): boolean {
    return width < 960;
  }
}
