import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { CustomerLayoutComponent } from './layout/customer-layout/customer-layout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'dashboard-test',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'customers-test',
        loadChildren: () =>
        import('./modules/customers/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'contact-test',
        loadChildren: () =>
        import('./modules/contact/contact.module').then(m => m.ContactModule)
      },
    ]
  },
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      {
        path: 'customers-test1',
        loadChildren: () =>
          import('./modules/customers/customer.module').then(m => m.CustomerModule)
      },
    ]
  },

  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  // Fallback when no prior routes is matched
   { path: '**', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
