import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";

import {LanguageService} from "../language.service";
import {PersonDialogComponent} from "./person-dialog.component";
import {WindowService} from "../window.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input('person') person: any;
  width: number = 500;
  lang: string;

  constructor(public langService: LanguageService, public dialog: MatDialog,
              private windowService: WindowService) { }

  ngOnInit() {
    this.width = this.windowService.getWindow().innerWidth;
    this.windowService.getWindow().onresize = (e) => {
      this.width = this.windowService.getWindow().innerWidth;
    };

    this.langService.lang$.subscribe(lang => {
      this.lang = lang;
      let res, j;
      if (lang === 'english') {
        res = this.person.responsibility_en;
        j   = ', ';
      } else {
        res = this.person.responsibility_fa;
        j   = '، ';
      }
      this.person.responsibilities = res.join(j);
    });
  }

  showDetails(){
    let _width = this.windowService.getWindow().innerWidth;
    let _height = this.windowService.getWindow().innerHeight;

    this.dialog.open(PersonDialogComponent, {
      width: _width * 0.8 + 'px',
      height: _height * 0.8 + 'px',
      data: {
        person: this.person,
        width: _width * 0.8,
        height: _height * 0.8
      }
    });
  }
}
