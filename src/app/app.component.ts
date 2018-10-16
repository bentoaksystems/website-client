import {Component, OnInit} from '@angular/core';
import {SpinnerService} from './shared/services/spinner.service';
import { GoogleAnalyticsService } from 'angular-ga';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  spinnerEnabled = false;

  constructor(private spinnerService: SpinnerService, private gaService: GoogleAnalyticsService) {
  }

  ngOnInit() {
    this.spinnerService.isSpinner$.subscribe(is_spinner => {
      setTimeout(() => {
        this.spinnerEnabled = is_spinner;
      });
    });
    this.gaService.configure('UA-127528225-1');
  }
}
