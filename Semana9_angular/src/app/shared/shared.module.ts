import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { RedDirective } from './directives/red.directive';
import { PhonePipe } from './pipes/phone.pipe';

// this module controls all the components that are shared between pages

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RedDirective,
    PhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ //makes the components available to be used in other modules
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PhonePipe
  ]
})
export class SharedModule { }
