import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from './../../providers/auth-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { UserinfoPage } from '../userinfo/userinfo';
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-register',
    templateUrl: 'register.html'

})
export class RegisterPage {
  user: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public _auth: AuthService, public af: AngularFire) {
    this.user = af.database.list('/user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  signInWithFacebook(): void {
        this._auth.signInWithFacebook()
      .then(() =>this.validateUser(this._auth.facebookUID()));
  }

  private validateUser(uid: any){
    console.log("b4 validate uid : "+uid)
  //   const users = this.af.database.object('/user/'+uid, { preserveSnapshot: true });
  //   users.subscribe(data => {
  //   if(data.exists()) {
  //     console.log("go to create");
  //     this.createUser(uid);
  //   } else {
  //     console.log("exist");
  //     this.close();
  //   }
  // });
    //   this.af.database.object('user/'+this._auth.facebookUID())
    //   .subscribe(displayName => {
    //   if(displayName == null){
    //     console.log('sss : '+uid);
    //     console.log("dispalyname null na ja : "+displayName);
    //     return this.createUser(uid);
    //   } else{
    //     console.log('displayname Not null na ja : '+displayName);
    //     return this.close();
    //   }
    // });

this.af.database.object('/user/' + uid).$ref.transaction(currentValue => {
  if (currentValue === null) {
    return this.createUser(uid);
  } else {
    console.log('This username is taken. Try another one');
    return this.close();
  }
})
.then( result => {
   // Good to go, user does not exist
   if (result.committed) {
          console.log('Tsaasas');
   }
});
  }


  private createUser(uid: any){
    console.log("Facebook uid ",uid);
    console.log("not exist");
    this.user.update(uid,{
      displayName: this._auth.displayName(),
      lv : 1,
      exp : 0,
      totalDistance : 0,
      todayDistance : 0,
      coin :  { bronze:0, silver:0, gold:0},
      skill : { 
                waterTank:{ 
                  level:0,
                  displayName: "Water Tank",
                  description: "Gain more exerience from distance",
                  iconUrl: "../../assets/image/skills/oil_tank.png"
                  },
                pickPocket:{ 
                  level:0,
                  displayName: "Pick Pocket",
                  description: "Increase chance to get rarity coin when sprint running",
                  iconUrl: "../../assets/image/skills/pick.png"
                  },
                sprint:{ 
                  level:0,
                  displayName: "Sprint",
                  description: "Gain more experience from sprint running",
                  iconUrl: "../../assets/image/skills/run.png"
                  },
                steady:{ 
                  level:0,
                  displayName: "Slow&Steady wins the race",
                  description: "Get more coin when find it",
                  iconUrl: "../../assets/image/skills/win.png"
                  },
                gambler:{ 
                  level:0,
                  displayName: "Gambler",
                  description: "Increase chance to get rarity coin",
                  iconUrl: "../../assets/image/skills/gamble1.png"
                  },
                noMore:{ 
                  level:0,
                  displayName: "No More!",
                  description: "Reduce chance to get duplicate jigsaw",
                  iconUrl: "../../assets/image/skills/gamble2.png"
                  }
              },
      inventory : {
                    collection1:{
                      displayName : "Unknow 1",
                      firstJigsaw : 0,
                      secondJigsaw : 0,
                      thirdJigsaw : 0,
                      fourthJigsaw : 0,
                      allCollected : false
                    },
                    collection2:{
                      displayName : "Unknow 2",
                      firstJigsaw : 0,
                      secondJigsaw : 0,
                      thirdJigsaw : 0,
                      fourthJigsaw : 0,
                      allCollected : false
                    },
                    collection3:{
                      displayName : "Unknow 3",
                      firstJigsaw : 0,
                      secondJigsaw : 0,
                      thirdJigsaw : 0,
                      fourthJigsaw : 0,
                      allCollected : false
                    },
                  }
    }).then(() => this.close());
  }

  private close(){
    this.navCtrl.setRoot(UserinfoPage);
  }

}