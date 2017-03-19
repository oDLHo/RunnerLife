import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { SkillsPage } from '../skills/skills';
import { UserinfoPage } from '../userinfo/userinfo';
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  template: `
      <button ion-button color="primary" (click)="close()">Login with Facebook</button><br>
      <button ion-button color="danger" (click)="close()">Login with Google</button><br>
      <button ion-button color="primary" (click)="close()">Login as Guest</button>
  `
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  close(){
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot(UserinfoPage);
  }

}