import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HomeComponent } from '../customer/home/home.component';
import { HomeComponent } from './home/home.component';
import { ClientModule } from '../client/client.module';
import { ReviewComponent } from './review/review.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { TrackPaymentComponent } from './track-payment/track-payment.component';
// import { HelpNSupportComponent } from './help-n-support/help-n-support.component';
// import { AdvertisementBannerComponent } from '../advertisement-banner/advertisement-banner.component';
// import { QuestionsListComponent } from '../questions-list/questions-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    ReviewComponent,
    ViewProfileComponent,
    EditProfileComponent,
    SettingsComponent,
    TrackPaymentComponent,
    // HelpNSupportComponent,
    // AdvertisementBannerComponent
    // QuestionsListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ClientModule /* Need to import ClientModule module beacause it contains some common components AdvertisementBannerComponent, etc */
  ],
  exports: [
    // AdvertisementBannerComponent
  ]
})
export class CustomerModule { }
