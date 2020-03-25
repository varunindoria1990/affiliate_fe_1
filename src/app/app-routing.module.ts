import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AffiliatePageComponent } from './affiliate-page/affiliate-page.component';
import { PostNewAppComponent } from './post-new-app/post-new-app.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignoutComponent } from './signout/signout.component';
import { YourAppsComponent } from './your-apps/your-apps.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { SignupClientComponent } from './signup-client/signup-client.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { AuthGuardService } from './auth-guard.service';

import { HomeComponent as ClientHomeParentComponent } from './client/home/home.component';
import { HelpAndSupportComponent } from './client/help-and-support/help-and-support.component';
import { AppAnalysisComponent } from './client/app-analysis/app-analysis.component';
import { AppAnalysisDetailsComponent } from './client/app-analysis-details/app-analysis-details.component';

import { HomeComponent as CustomerHomeParentComponent } from './customer/home/home.component';
import { ReviewComponent } from './customer/review/review.component';
import { ViewProfileComponent } from './customer/view-profile/view-profile.component';
import { EditProfileComponent } from './customer/edit-profile/edit-profile.component';
import { SettingsComponent } from './customer/settings/settings.component';
import { TrackPaymentComponent } from './customer/track-payment/track-payment.component';


const routes: Routes = [

  { 
    path: "affiliate",
    redirectTo: "/",  
    pathMatch: "full" 
  },
  {
    path: "client",
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: ClientHomeParentComponent },
      { path: "help_n_support", component: HelpAndSupportComponent }, 
      { path: "app_analysis", component: AppAnalysisComponent },
      { path: "app_analysis_details/:id", component: AppAnalysisDetailsComponent }
    ]
  },
  {
    path: "customer",
    children: [
      { path: "", redirectTo: "home", pathMatch: "full"},
      { path: "home", component: CustomerHomeParentComponent },
      { path: "review", component: ReviewComponent },
      { path: "view_profile", component: ViewProfileComponent },
      { path: "edit_profile", component: EditProfileComponent },
      { path: "settings", component: SettingsComponent },
      { path: "track_payments", component: TrackPaymentComponent },
      { path: "help_n_support", component: HelpAndSupportComponent }
    ]
  },
  { 
    path: "app_details/:id", 
    component: AppDetailsComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: "google_login", 
    component: GoogleLoginComponent
  },
  { 
    path: "postapp", 
    component: PostNewAppComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: "signout", 
    component: SignoutComponent
  },
  { 
    path: "signin", 
    component: SigninComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: "signup_user", 
    component: SignupUserComponent
    // canActivate: [AuthGuardService]
  },
  { 
    path: "signup_client", 
    component: SignupClientComponent
    // canActivate: [AuthGuardService]
  },
  { 
    path: "apps", 
    component: YourAppsComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: "user_home", 
    component: UserHomeComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: "client_home", 
    component: ClientHomeComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: "search", 
    component: SearchPageComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: "subscribe", 
    component: SubscriptionPageComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: "transactions", 
    component: TransactionListComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: "dashboard", 
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: "", 
    component: AffiliatePageComponent 
  },
  { 
    path: "**", 
    component: ErrorPageComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
