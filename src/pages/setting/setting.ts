import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from './../../providers/auth-service';
import { HomePage } from './../home/home';
/*
  Generated class for the Setting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _auth: AuthService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  signOut(){
    this._auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }

}
