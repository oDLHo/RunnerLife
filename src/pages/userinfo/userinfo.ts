import { FirebaseObjectObservable, AngularFire } from 'angularfire2';
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
  user : FirebaseObjectObservable<any[]>;
  uid : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFire, private _auth: AuthService) {
    this.user = this.af.database.object('user/'+this._auth.facebookUID());
    this.uid = this._auth.facebookUID();
  }

  ionViewDidLoad() {
    console.log("uid is "+this.uid);
  }

  goToSkill(){
    this.navCtrl.push(SkillsPage,{uid : this.uid});
  }
  
  goToCollection(){
    this.navCtrl.push(CollectionPage,{uid : this.uid});
  }

  goToGacha(){
    this.navCtrl.push(GachapongPage,{uid : this.uid});
  }

  goToSetting(){
    this.navCtrl.push(SettingPage,{uid : this.uid});
  }

  goToInventory(){
    this.navCtrl.push(InventoryPage,{uid : this.uid});
  }
}
