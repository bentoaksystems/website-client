import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MdButtonModule, MdGridListModule, MdListModule, MdProgressSpinnerModule,
  MdSidenavModule
} from "@angular/material";
import {GalleriaModule, ToggleButtonModule} from "primeng/primeng";

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {ContentfulService} from "./contentful.service";
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PeopleComponent } from './people/people.component';
import {LanguageService} from "./language.service";
import {WindowService} from "./window.service";
import { ContactComponent } from './contact/contact.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { PersonPreviewComponent } from './person-preview/person-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    AboutUsComponent,
    PeopleComponent,
    ContactComponent,
    ProjectPreviewComponent,
    PersonPreviewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MdSidenavModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdListModule,
    MdGridListModule,
    GalleriaModule,
    ToggleButtonModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'people', component: PeopleComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'contact', component: ContactComponent}
    ])
  ],
  providers: [ContentfulService, LanguageService, WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
