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

  getJigsaw(coinType : string){
    
    let type = Math.floor((Math.random() * 3) + 1);
    let collection;
    if(type == 1){
      collection = "collection1";
    }else if(type == 2){
      collection = "collection2";
    }else if(type == 3){
      collection = "collection3";
    }

    let jigsawPiece = Math.floor((Math.random() * 100) + 1);
    let jigsaw;
    console.log("jig : "+ jigsawPiece);
    if(coinType == 'gold'){
      console.log("gold na ja");
      if(jigsawPiece >= 1 && jigsawPiece <= 10){
        jigsaw = "firstJigsaw";
      }else if(jigsawPiece > 10  && jigsawPiece <= 20){
        jigsaw = "secondJigsaw";
      }else if(jigsawPiece > 20 && jigsawPiece <= 60){
        jigsaw = "thirdJigsaw";
      }else if(jigsawPiece > 60 && jigsawPiece <= 100){
        jigsaw = "fourthJigsaw";
      }

    }else if(coinType == 'silver'){
      console.log("silver na ja");
      if(jigsawPiece >= 1 && jigsawPiece <= 25){
        jigsaw = "firstJigsaw";
      }else if(jigsawPiece > 25  && jigsawPiece <= 50){
        jigsaw = "secondJigsaw";
      }else if(jigsawPiece > 50 && jigsawPiece <= 75){
        jigsaw = "thirdJigsaw";
      }else if(jigsawPiece > 75 && jigsawPiece <= 100){
        jigsaw = "fourthJigsaw";
      }

    }else if(coinType == 'bronze'){
      console.log("bronze na ja");
      if(jigsawPiece >= 1 && jigsawPiece <= 40){
        jigsaw = "firstJigsaw";
      }else if(jigsawPiece > 40  && jigsawPiece <= 70){
        jigsaw = "secondJigsaw";
      }else if(jigsawPiece > 70 && jigsawPiece <= 90){
        jigsaw = "thirdJigsaw";
      }else if(jigsawPiece > 90 && jigsawPiece <= 100){
        jigsaw = "fourthJigsaw";
      }

    }

    console.log("Jigsaw : "+jigsaw);
    console.log("Collection : "+collection);

    this.af.database.object('user/'+this.uid+'/coin/'+coinType).$ref
    .ref.transaction(coinType => {
            return coinType - 1;
    })

    this.af.database.object('user/'+this.uid+'/inventory/'+collection+'/'+jigsaw).$ref
    .ref.transaction(jigsaw => {
            return jigsaw + 1;
    })
  }

}
