import {Component, OnInit} from '@angular/core';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: any = [];
  waiting: boolean = false;

  constructor(private getJsonService: GetJsonFileService) {
  }

  ngOnInit() {
    this.waiting = true;

    this.getJsonService.getPeopleData()
      .then(res => {
        this.people = res;
        this.waiting = false;
      })
      .catch(err => console.error('people data fetch failed', err));
  }

}
