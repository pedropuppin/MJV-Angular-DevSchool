import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// this module controls all the components that are shared between pages

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ //makes the components available to be used in other modules
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
