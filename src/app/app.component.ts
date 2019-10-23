import {Component, OnInit} from '@angular/core';
import {SpinnerService} from './shared/services/spinner.service';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  spinnerEnabled = false;

  constructor(private spinnerService: SpinnerService, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    angulartics2GoogleAnalytics.startTracking();

  }

  ngOnInit() {
    this.spinnerService.isSpinner$.subscribe(is_spinner => {
      setTimeout(() => {
        this.spinnerEnabled = is_spinner;
      });
    });
  }
}
