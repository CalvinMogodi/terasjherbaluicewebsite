import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestimoninalsComponent } from './testimoninals/testimoninals.component';
import { RoleofjuiceComponent } from './roleofjuice/roleofjuice.component';
import { BenefitsofjuiceComponent } from './benefitsofjuice/benefitsofjuice.component';
import { AboutComponent } from './about/about.component';
import { HowtouseComponent } from './howtouse/howtouse.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TestimoninalsComponent,
    RoleofjuiceComponent,
    BenefitsofjuiceComponent,
    AboutComponent,
    HowtouseComponent,
    TermsandconditionsComponent,
    ContactusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
