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
        path: 'employee',
        loadChildren: () =>
        import('./modules/employee/employee-list/employee-list.module').then(m => m.EmployeeListModule)
      },
      {
        path: 'employee/add',
        loadChildren: () =>
        import('./modules/employee/employee-add/employee-add.module').then(m => m.EmployeeAddModule)
      },
      {
        path: 'employee/edit/:id',
        loadChildren: () =>
        import('./modules/employee/employee-edit/employee-edit.module').then(m => m.EmployeeEditModule)
      },
      // user
      {
        path: 'users',
        loadChildren: () =>
        import('./modules/user/user-list/user-list.module').then(m => m.UsersModule)
      },

       // dasboard
       {
        path: 'dashboard',
        loadChildren: () =>
        import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
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
   { path: '**', redirectTo: '/employee', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
