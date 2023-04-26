import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// imports responsáveis pela config dos pipes em ptBR
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'; // a importação é feita dessa forma pq estamos importando o localePt como um todo
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { ListingModule } from './features/listing/listing.module';
import { SharedModule } from './shared/shared.module'; // import call for shared module
import { RouterModule, Routes } from '@angular/router';
import { ColaboratorsComponent } from './features/listing/pages/colaborators/colaborators.component';
import { ManagementModule } from './features/management/management.module';
import { ManagementComponent } from './features/management/pages/management/management.component';
import { DetailsColabComponent } from './features/listing/pages/details-colab/details-colab.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { LoginModule } from './features/login/login.module';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { HomeModule } from './features/home/home.module';
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';
import { CreateColabPageComponent } from './features/listing/pages/create-colab-page/create-colab-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent },
  {path: 'colaborators', component: ColaboratorsComponent, canActivate: [AuthGuardGuard]}, // chama a função canActivate definida lá no auth-guard.guard.ts
  {path: 'management', component: ManagementComponent, canActivate: [AuthGuardGuard] },
  {path: 'details-colab/:colaboratorId', component: DetailsColabComponent, canActivate: [AuthGuardGuard] },
  { path: 'create-colaborator', component: CreateColabPageComponent, canActivate: [AuthGuardGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule, // import new components from shared folder
    ListingModule,
    ManagementModule,
    RouterModule.forRoot(routes),
    LoginModule,
    HomeModule
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
