import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/components/signin/signin.component';

const routes: Routes = [
  //{
  //  path: '',
  //  loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  //},
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
