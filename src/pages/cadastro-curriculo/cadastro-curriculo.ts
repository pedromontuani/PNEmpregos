import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';

/**
 * Generated class for the CadastroCurriculoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-curriculo',
  templateUrl: 'cadastro-curriculo.html',
})
export class CadastroCurriculoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroCurriculoPage');
  }

  onClickFinalizar() {
    this.navCtrl.setRoot(PerfilUsuarioPage);
  }

  onClickVoltar() {
    this.navCtrl.pop();
  }

}
