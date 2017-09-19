import { Component, OnInit } from '@angular/core';

import {ContentfulService} from "../contentful.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: any = [];
  waiting: boolean = false;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.waiting = true;

    this.contentfulService.getPeople()
      .then(res => {
         for(let item of res){
          this.people.push({
            title: item.fields.title,
            fullName_en: item.fields.fullNameEn,
            fullName_fa: item.fields.fullNameFa,
            image: item.fields.image.fields.file.url,
            cover: item.fields.cover ? item.fields.cover.fields.file.url : null,
            linkedin: item.fields.linkedin,
            favorites_en: item.fields.favoritesEn,
            favorites_fa: item.fields.favoritesFa,
            responsibility_en: item.fields.responsibilityEn,
            responsibility_fa: item.fields.responsibilityFa,
            email: item.fields.email,
            phone: item.fields.phone
          });
        }

        this.waiting = false;
      })
      .catch(err => {
        console.log(err);
      });
  }

}
