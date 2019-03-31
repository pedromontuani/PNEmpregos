import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroCurriculoPage } from './cadastro-curriculo';

@NgModule({
  declarations: [
    CadastroCurriculoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroCurriculoPage),
  ],
})
export class CadastroCurriculoPageModule {}
