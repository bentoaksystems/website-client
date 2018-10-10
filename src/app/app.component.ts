import {Component, OnInit} from '@angular/core';
import {SpinnerService} from './shared/services/spinner.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  spinnerEnabled = false;
  constructor(private spinnerService: SpinnerService) {
  }
  ngOnInit() {
    this.spinnerService.isSpinner$.subscribe(is_spinner=> {
      // console.log(is_spinner);
      setTimeout(() =>{
        this.spinnerEnabled = is_spinner;
    });
    });
  }
}
