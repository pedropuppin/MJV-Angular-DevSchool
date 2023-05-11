import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './pages/management/management.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ManagementComponent
  ]
})
export class ManagementModule { }
