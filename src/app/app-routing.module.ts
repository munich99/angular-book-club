import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyLoginComponent } from './login/my-login/my-login.component'


const routes: Routes =  [
  { path: 'heroes', component: MyLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
