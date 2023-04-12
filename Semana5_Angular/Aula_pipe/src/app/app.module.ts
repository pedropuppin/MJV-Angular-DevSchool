import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListingModule } from './features/listing/listing.module';
import { SharedModule } from './shared/shared.module'; // import call for shared module

// imports responsáveis pela config dos pipes em ptBR
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'; // a importação é feita dessa forma pq estamos importando o localePt como um todo
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule, // import new components from shared folder
    ListingModule
  ],
  providers: [ // precisa criar um provider para o padrão do pipe ptBR
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
