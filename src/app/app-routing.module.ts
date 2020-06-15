import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { CustomerLayoutComponent } from './layout/customer-layout/customer-layout.component';
import { EditUserComponent } from './modules/edit-forms/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'employee',
        loadChildren: () =>
        import('./modules/customers/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'employee/detail/:id',
        loadChildren: () =>
        import('./modules/detail/detail.module').then(m => m.DetailUserModule)
      },
      {
        path: 'employee/add',
        loadChildren: () =>
        import('./modules/add-forms/add-forms.module').then(m => m.AddFormModule)
      },
      {
        path: 'employee/edit/:id',
        loadChildren: () =>
        import('./modules/edit-forms/edit-forms.module').then(m => m.EditFormModule)
      },
      {
        path: 'skills',
        loadChildren: () =>
        import('./modules/skill/skill-list/skill-list.module').then(m => m.SkillsModule)
      },
      // skill
      {
        path: 'skills/detail/:id',
        loadChildren: () =>
        import('./modules/skill/skill-add/skill-add.module').then(m => m.SkillAddModule)
      },
      // user
      {
        path: 'users',
        loadChildren: () =>
        import('./modules/user/user-list/user-list.module').then(m => m.UsersModule)
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
