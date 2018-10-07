import {NgModule} from '@angular/core';
import {SiteRouting} from './site.routing';
import {CommonModule} from '@angular/common';
import {SiteComponent} from './site.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatInputModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatStepperModule, MatRadioModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatSliderModule,
  MatTooltipModule,
  MatExpansionModule
} from '@angular/material';
import {AboutUsComponent} from './about-us/about-us.component';
import {SharedModule} from 'primeng/primeng';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';
import {PeopleComponent} from './people/people.component';
import {ProjectsComponent} from './projects/projects.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {PersonDialogComponent} from './people/person-dialog/person-dialog.component';
import {ProjectComponent} from './projects/project/project.component';
import {ProjectDialogComponent} from './projects/project-dialog/project-dialog.component';
import {PersonComponent} from './people/person/person.component';
import {HomeComponent} from './home/home.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { BlogComponent } from './blog/blog.component';
// import{BrowserModule} from '@angular/platform-browser';
import{CollapseModule}from './home/collapse/';
// import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    SiteRouting,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    // BrowserModule, 
    CollapseModule,
    //  BrowserAnimationsModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCheckboxModule,
    MatStepperModule,
    MatRadioModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSliderModule,
    SharedModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  declarations: [
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    PeopleComponent,
    ProjectsComponent,
    SiteComponent,
    PersonComponent,
    PersonDialogComponent,
    ProjectComponent,
    ProjectDialogComponent,
    HomeComponent,
    MobileHeaderComponent,
    BlogComponent,
  ],
  
  bootstrap:    [ HomeComponent ],

  entryComponents: [PersonDialogComponent,
    ProjectDialogComponent],
  providers: []
})
export class SiteModule {
}
