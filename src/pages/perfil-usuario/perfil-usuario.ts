import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpregosPage } from '../empregos/empregos';
import { LoginPage } from '../login/login';
import { StatusEmpregoPage } from '../status-emprego/status-emprego';
import { AlterarDadosPage } from '../alterar-dados/alterar-dados';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-perfil-usuario',
  templateUrl: 'perfil-usuario.html',
})
export class PerfilUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilUsuarioPage');
  }

  onClickBuscarEmpregos() {
    this.navCtrl.push(EmpregosPage);
  }

  onClickStatus() {
    this.navCtrl.push(StatusEmpregoPage);
  }

  onClickAlterarDados() {
    this.navCtrl.push(AlterarDadosPage);
  }

  onClickSair() {
    this.navCtrl.setRoot(HomePage);
  }
}
