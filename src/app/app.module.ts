import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNaviComponent } from './my-navi/my-navi.component';
import { MyLoginComponent } from './login/my-login/my-login.component'

@NgModule({
   declarations: [
      AppComponent,
      MyNaviComponent,
      MyLoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
