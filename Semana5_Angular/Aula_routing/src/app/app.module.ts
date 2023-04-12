import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { ContactModule } from './features/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule, // exportado no "home.module.ts"
    LoginModule, // exportado no "login.module.ts"
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
