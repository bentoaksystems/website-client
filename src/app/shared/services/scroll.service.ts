import {Injectable} from '@angular/core';
import {ScrollToService, ScrollToConfigOptions} from '@nicky-lenaers/ngx-scroll-to';

@Injectable()
export class ScrollService {

  position: any = '';
  constructor(private _scrollToService: ScrollToService) {
  }

  public triggerScrollTo() {
  
    const config: ScrollToConfigOptions = {
      target: this.position,
      offset: -30,
    };
    setTimeout(() => {
      this._scrollToService.scrollTo(config)
    });
  }
}
