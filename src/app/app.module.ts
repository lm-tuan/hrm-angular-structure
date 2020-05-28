
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { TutorialService } from './core/service/tutorialService';
import { HttpClientModule } from '@angular/common/http';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { HomeModule } from './modules/home/home.module';
import { NavComponent } from './layout/nav/nav.component';
import { CustomerLayoutComponent } from './layout/customer-layout/customer-layout.component';
import { CustomerModule } from './modules/customers/customer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './modules/contact/contact.component';
import { ContactModule } from './modules/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ContentLayoutComponent,
    NavComponent,
    CustomerLayoutComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AuthModule,
    HomeModule,
    CustomerModule,
    ContactModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [TutorialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
