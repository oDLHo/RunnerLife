import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from './../../providers/auth-service';
/*
  Generated class for the Gachapong page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gachapong',
  templateUrl: 'gachapong.html'
})
export class GachapongPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFire, private _auth: AuthService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GachapongPage');
  }

  addBronze(){
    this.af.database.object(`user/odlho/coin/bronze`).$ref
    .ref.transaction(bronze => {
            return bronze + 1;
    })
  }

  addSilver(){
    this.af.database.object(`user/odlho/coin/silver`).$ref
    .ref.transaction(silver => {
            return silver + 1;
    })
  }

  addGold(){
    this.af.database.object(`user/odlho/coin/gold`).$ref
    .ref.transaction(gold => {
            return gold + 1;
    })
  }
}
