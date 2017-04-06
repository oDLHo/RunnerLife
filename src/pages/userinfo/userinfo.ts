import { InventoryPage } from './../inventory/inventory';
import { GachapongPage } from './../gachapong/gachapong';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from './../../providers/auth-service';
import { CollectionPage } from '../collection/collection';
import { SkillsPage } from '../skills/skills';
import { SettingPage } from '../setting/setting';
/*
  Generated class for the Userinfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-userinfo',
  templateUrl: 'userinfo.html'
})
export class UserinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _auth: AuthService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserinfoPage');
  }

  goToSkill(){
    this.navCtrl.push(SkillsPage);
  }
  
  goToCollection(){
    this.navCtrl.push(CollectionPage);
  }

  goToGacha(){
    this.navCtrl.push(GachapongPage);
  }

  goToSetting(){
    this.navCtrl.push(SettingPage);
  }

  goToInventory(){
    this.navCtrl.push(InventoryPage);
  }
}
