import {Injectable} from '@angular/core';
import {createClient} from 'contentful';

// Config details for contentful
const CONFIG = {
  space: 'yati6i04nkb8',
  accessToken: '6f55cd79a0e3812ea24a362ff18894f4792d08ea62f2d8628c6329b4fc4bf87c',
  contentTypeIds: {
    projects: 'projects',
    people: 'people',
    about: 'about',
    home: 'homeData',
    contact: 'contact',
    intro: 'intro',
  }
};

@Injectable()
export class ContentfulService {
  private cdaClient = null;

  constructor() {
    this.cdaClient = createClient({
      space: CONFIG.space,
      accessToken: CONFIG.accessToken
    });
  }

  getContactData(query?: object): any {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.contact
    }, query))
      .then(res => res.items)
      .catch(err => {
        console.log(err);
      });
  }

  getHomeData(query?: object): any {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.home
    }, query))
      .then(res => res.items)
      .catch(err => {
        console.log(err);
      })
  }

  getProjects(query?: object): any {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.projects
    }, query))
      .then(res => res.items)
      .catch(err => {
        console.log(err);
      })
  }

  getPeople(query?: object): any {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.people
    }, query))
      .then(res => res.items)
      .catch(err => {
        console.log(err);
      })
  }

  getAbout(query?: object): any {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.about
    }, query))
      .then(res => res.items)
      .catch(err => console.log(err));
  }

  getIntro(query?: object): any {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.intro
    }, query))
      .then(res => res.items[0].fields)
      .catch(err => console.log(err));
  };
}
