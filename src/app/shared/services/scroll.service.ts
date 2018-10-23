import {Injectable} from '@angular/core';
import {ScrollToService, ScrollToConfigOptions} from '@nicky-lenaers/ngx-scroll-to';

@Injectable()
export class ScrollService {

  position: any = '';
<<<<<<< HEAD
  container: any = '';
=======

>>>>>>> 620199eea2758b852ed2ff45ed4caf01410212ed
  constructor(private _scrollToService: ScrollToService) {
  }

  public triggerScrollTo() {
    /**
     * @see NOTE:1
     */
    const config: ScrollToConfigOptions = {
      target: this.position,
      offset: -30,
    };
<<<<<<< HEAD

    this._scrollToService.scrollTo(config)
      .subscribe(
        value => { console.log(value) },
        err => console.error(err) // Error is caught and logged instead of thrown
      );
=======
    setTimeout(() => {
      this._scrollToService.scrollTo(config)
    });
>>>>>>> 620199eea2758b852ed2ff45ed4caf01410212ed
  }
}
