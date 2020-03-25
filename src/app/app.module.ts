import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';

// import { HttpModule } from '@angular/http';
// import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { AffiliatePageComponent } from './affiliate-page/affiliate-page.component';
import { YourAppsComponent } from './your-apps/your-apps.component';
import { PostNewAppComponent } from './post-new-app/post-new-app.component';
import { SignoutComponent } from './signout/signout.component';
import { AppDetailsComponent } from './app-details/app-details.component';

// import { SliderComponent } from './slider/slider.component';
import { LoginRegisterOverlayDirective } from './login-register-overlay.directive';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { SignupClientComponent } from './signup-client/signup-client.component';
// import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
// import { ReviewEarnMoneyComponent } from './review-earn-money/review-earn-money.component';
// import { GetReviewUploadAppComponent } from './get-review-upload-app/get-review-upload-app.component';
// import { EachAppListContainerComponent } from './each-app-list-container/each-app-list-container.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
// import { AdvertisementBannerComponent } from './advertisement-banner/advertisement-banner.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { AppListComponent } from './app-list/app-list.component';
import { SmalldeviceHeaderComponent } from './smalldevice-header/smalldevice-header.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoaderComponent } from './loader/loader.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ClientModule } from './client/client.module';
import { CustomerModule } from './customer/customer.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    GoogleLoginComponent,
    AffiliatePageComponent,
    YourAppsComponent,
    PostNewAppComponent,
    SignoutComponent,
    AppDetailsComponent,
    // SliderComponent,
    LoginRegisterOverlayDirective,
    SignupUserComponent,
    SignupClientComponent,
    // AdvertisementComponent,
    ClientHomeComponent,
    UserHomeComponent,
    // ReviewEarnMoneyComponent,
    // GetReviewUploadAppComponent,
    // EachAppListContainerComponent,
    LoginPopupComponent,
    // AdvertisementBannerComponent,
    QuestionsListComponent,
    SearchPageComponent,
    AppListComponent,
    SmalldeviceHeaderComponent,
    SubscriptionPageComponent,
    TransactionListComponent,
    DashboardComponent,
    LoaderComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ClientModule,
    RouterModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
