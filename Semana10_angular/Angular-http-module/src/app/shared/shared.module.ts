import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { RedDirective } from './directives/red.directive';
import { PhonePipe } from './pipes/phone.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RedDirective,
    PhonePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule, // importa o módulo HttpClientModule (não faz de forma automática)
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PhonePipe
  ]
})
export class SharedModule { }
