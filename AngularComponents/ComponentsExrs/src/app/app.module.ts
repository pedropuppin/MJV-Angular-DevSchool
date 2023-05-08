import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './shared/components/form/form.component';
import { ButtonComponent } from './shared/components/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
