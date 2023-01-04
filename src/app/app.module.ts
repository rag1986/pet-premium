import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QueryComponent } from './query/query.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { InsuranceInfoComponent } from './insurance-info/insurance-info.component';
import { EnrollForm1Component } from './enroll-form1/enroll-form1.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentFailedComponent } from './payment-failed/payment-failed.component';
import { MaterialModule } from './modules/material.module';
import { ErrorComponent } from './error/error.component';
import { EnrollReviewComponent } from './enroll-review/enroll-review.component';
import { EnrollReview2Component } from './enroll-review2/enroll-review2.component';
import { CompareComponent } from './compare/compare.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryComponent,
    HeaderComponent,
    FooterComponent,
    InsuranceInfoComponent,
    EnrollForm1Component,
    PaymentSuccessComponent,
    PaymentFailedComponent,
    ErrorComponent,
    EnrollReviewComponent,
    EnrollReview2Component,
    CompareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
