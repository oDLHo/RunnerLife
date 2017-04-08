import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
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
  coins : FirebaseObjectObservable<any[]>;
  uid : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFire, private _auth: AuthService) {
    this.uid = this.navParams.get('uid');
    this.coins = af.database.object('user/'+this.uid);
  }

  ionViewDidLoad() {
    console.log("gacha uid is "+this.uid);
  }

  addCoin(coinType : string){
    this.af.database.object('user/'+this.uid+'/coin/'+coinType).$ref
    .ref.transaction(coinType => {
            return coinType + 1;
    })
  }
}
