
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
import { NavComponent } from './layout/nav/nav.component';
import { CustomerLayoutComponent } from './layout/customer-layout/customer-layout.component';
import { CustomerModule } from './modules/customers/customer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/service/authService';
import { TokenStorageService } from './core/service/token-storage.service';
import {Location } from '@angular/common';
import { UserService } from './core/service/user.service';
import { authInterceptorProviders } from './core/interceptor/auth.interceptor';
import { AddFormModule } from './modules/add-forms/add-forms.module';
import { EditFormModule } from './modules/edit-forms/edit-forms.module';
import { SkillsModule } from './modules/skill/skill-list/skill-list.module';
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
    CustomerModule,
    AddFormModule,
    EditFormModule,
    SharedModule,
    SkillsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, TokenStorageService, UserService, authInterceptorProviders  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
