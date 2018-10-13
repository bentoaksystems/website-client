import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import {LanguageService} from '../../../shared/services/language.service';
import {PersonDialogComponent} from '../person-dialog/person-dialog.component';
import {WINDOW} from '../../../shared/services/window.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input('person') person: any;
  width: number = 500;
  images: any = {};

  constructor(public langService: LanguageService, public dialog: MatDialog,
    @Inject(WINDOW) private window) {
    this.images = {
      github: 'assets/images/social/github.png',
      linkedin: 'assets/images/social/linkedin.png',
      slack: 'assets/images/social/slack.png',
      email: 'assets/images/social/email.png',
    };
  }

  ngOnInit() {
    this.width = this.window.innerWidth;
    this.window.onresize = (e) => {
      this.width = this.window.innerWidth;
    };
  }

  // for a probable person-dialog, I kept this
  showDetails() {
    let _width = this.window.innerWidth;
    let _height = this.window.innerHeight;

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

  getKeys(obj) {
    return Object.keys(obj);
  }
}
