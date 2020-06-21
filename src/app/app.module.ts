
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/service/authService';
import { TokenStorageService } from './core/service/token-storage.service';
import {Location } from '@angular/common';
import { UserService } from './core/service/user.service';
import { authInterceptorProviders } from './core/interceptor/auth.interceptor';
import { SkillService } from './core/service/skillService';
import { LevelSkillService } from './core/service/LevelSkillService';
import { ProfileSkillService } from './core/service/ProfileSkillService';
import { UsersModule } from './modules/user/user-list/user-list.module';
import { DepartmentService } from './core/service/departmentService';
import { EmployeeAddModule } from './modules/employee/employee-add/employee-add.module';
import { EmployeeEditModule } from './modules/employee/employee-edit/employee-edit.module';
import { EmployeeListModule } from './modules/employee/employee-list/employee-list.module';
import { NavComponent } from './layout/nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ContentLayoutComponent,
    NavComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    // auth
    AuthModule,
    // employyee
    EmployeeAddModule,
    EmployeeEditModule,
    EmployeeListModule,
    SharedModule,
    // user
    UsersModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService,
    TokenStorageService,
    UserService,
    SkillService,
    LevelSkillService,
    ProfileSkillService,
    DepartmentService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
