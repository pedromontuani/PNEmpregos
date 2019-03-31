import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadastroCurriculoPage } from '../pages/cadastro-curriculo/cadastro-curriculo';
import { PerfilUsuarioPage } from '../pages/perfil-usuario/perfil-usuario';
import { EmpregosPage } from '../pages/empregos/empregos';
import { ContatoPage } from '../pages/contato/contato';
import { SobrePage } from '../pages/sobre/sobre';
import { LoginPage } from '../pages/login/login';
import { StatusEmpregoPage } from '../pages/status-emprego/status-emprego';
import { AlterarDadosPage } from '../pages/alterar-dados/alterar-dados';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    CadastroCurriculoPage,
    PerfilUsuarioPage,
    EmpregosPage,
    ContatoPage,
    SobrePage,
    LoginPage,
    StatusEmpregoPage,
    AlterarDadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    CadastroCurriculoPage,
    PerfilUsuarioPage,
    EmpregosPage,
    ContatoPage,
    SobrePage,
    LoginPage,
    StatusEmpregoPage,
    AlterarDadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
