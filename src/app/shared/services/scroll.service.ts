import {Injectable} from '@angular/core';
import {ScrollToService, ScrollToConfigOptions} from '@nicky-lenaers/ngx-scroll-to';

@Injectable()
export class ScrollService {

  position: any = '';
  container: any = '';
  constructor(private _scrollToService: ScrollToService) {
  }
  public triggerScrollTo() {
    /**
     * @see NOTE:1
     */
    const config: ScrollToConfigOptions = {
      target: this.position,
    };

    this._scrollToService.scrollTo(config)
      .subscribe(
        value => { console.log(value) },
        err => console.error(err) // Error is caught and logged instead of thrown
      );
  }
}
