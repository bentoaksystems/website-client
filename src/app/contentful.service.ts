import { Injectable } from '@angular/core';
import { createClient, Entry} from 'contentful';

//Config details for contentful
const CONFIG = {
  space: 'yati6i04nkb8',
  accessToken: '6f55cd79a0e3812ea24a362ff18894f4792d08ea62f2d8628c6329b4fc4bf87c',
  contentTypeIds: {
    projects: 'projects',
    people: '',
    about: '',
    home: 'homeData',
    contact: 'contact'
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

  getContactData(query? : object): any{
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.contact
    }, query))
      .then(res => res.items)
      .catch(err => {
        console.log(err);
        err;
      });
  }

  getHomeData(query? : object): any{
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.home
    }, query))
      .then(res => res.items)
      .catch(err => {
        console.log(err);
        err;
      })
  }

  getProjects(query? : object): any{
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.projects
    }, query))
      .then(res => res.items)
      .catch(err => {
        console.log(err);
        err;
      })
  }
}
