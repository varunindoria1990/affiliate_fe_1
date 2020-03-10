import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdvertisementBannerComponent } from '../advertisement-banner/advertisement-banner.component';
import { SliderComponent } from '../slider/slider.component';
import { AdvertisementComponent } from '../advertisement/advertisement.component';
import { ReviewEarnMoneyComponent } from '../review-earn-money/review-earn-money.component';
import { EachAppListContainerComponent } from '../each-app-list-container/each-app-list-container.component';
import { GetReviewUploadAppComponent } from '../get-review-upload-app/get-review-upload-app.component';
import { HelpAndSupportComponent } from './help-and-support/help-and-support.component';
import { AppAnalysisComponent } from './app-analysis/app-analysis.component';
import { AppAnalysisDetailsComponent } from './app-analysis-details/app-analysis-details.component';

@NgModule({
  declarations: [
    HomeComponent, 
    AdvertisementBannerComponent,
    SliderComponent,
    AdvertisementComponent,
    ReviewEarnMoneyComponent,
    EachAppListContainerComponent,
    GetReviewUploadAppComponent,
    HelpAndSupportComponent,
    AppAnalysisComponent,
    AppAnalysisDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent, 
    AdvertisementBannerComponent,
    SliderComponent,
    AdvertisementComponent,
    ReviewEarnMoneyComponent,
    EachAppListContainerComponent,
    GetReviewUploadAppComponent
  ]
})
export class ClientModule { }
