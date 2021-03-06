import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import {LanguageService} from '../../../shared/services/language.service';
import {PersonDialogComponent} from '../person-dialog/person-dialog.component';
import {WINDOW} from '../../../shared/services/window.service';
import { DictionaryService } from '../../../shared/services/dictionary.service';
import { TranslatorComponent } from '../../../shared/components/translator.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent extends TranslatorComponent implements OnInit {
  @Input() person: any;
  width = 500;
  images: any = {};

  constructor(public langService: LanguageService, public dialog: MatDialog,
    @Inject(WINDOW) private window, dictionaryService: DictionaryService) {
    super(dictionaryService);
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
    const _width = this.window.innerWidth;
    const _height = this.window.innerHeight;

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
