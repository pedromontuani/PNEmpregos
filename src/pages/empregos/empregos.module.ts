import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpregosPage } from './empregos';

@NgModule({
  declarations: [
    EmpregosPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpregosPage),
  ],
})
export class EmpregosPageModule {}
