import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { CustomerLayoutComponent } from './layout/customer-layout/customer-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'customers',
        loadChildren: () =>
        import('./modules/customers/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'customers/add',
        loadChildren: () =>
        import('./modules/add-forms/add-forms.module').then(m => m.AddFormModule)
      },
      {
        path: 'customers/detail',
        loadChildren: () =>
        import('./modules/detail/detail.module').then(m => m.DetailUserModule)
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
   { path: '**', redirectTo: '/customers', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
