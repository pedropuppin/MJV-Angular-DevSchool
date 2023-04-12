import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductsListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule // precisa importar o SharedModule pra poder usar o app-header e o app-footer no home.component.html
  ],
  exports: [
    HomeComponent // importado para o "app.module.ts"
  ]
})
export class HomeModule { }


// module de home gerado com "ng g m features/home"
