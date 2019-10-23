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
import {SharedModule} from 'primeng/primeng';
import {FooterComponent} from './footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {PersonDialogComponent} from './people/person-dialog/person-dialog.component';
import {ProjectDialogComponent} from './projects/project-dialog/project-dialog.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import {PricingService} from '../shared/services/pricing.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Angulartics2Module } from 'angulartics2';


@NgModule({
  imports: [
    SiteRouting,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
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
    MatExpansionModule,
    NgbModule,
    Angulartics2Module
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SiteComponent,
    PersonDialogComponent,
    ProjectDialogComponent,
    MobileHeaderComponent,
  ],
  entryComponents: [PersonDialogComponent,
    ProjectDialogComponent],
  providers: [PricingService]
})
export class SiteModule {
}
