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
import { CompareComponent } from './compare/compare.component';
import { QuotePopupComponent } from './quote-popup/quote-popup.component';
import { FilterComponent } from './filter/filter.component';
import { QuoteComponent } from './quote/quote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditWarningComponent } from './edit-warning/edit-warning.component';
import { PlandetailsComponent } from './plandetails/plandetails.component';

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
    CompareComponent,
    QuotePopupComponent,
    FilterComponent,
    QuoteComponent,
    EditWarningComponent,
    PlandetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
