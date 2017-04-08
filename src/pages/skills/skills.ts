import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from './../../providers/auth-service';
/*
  Generated class for the Skills page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html'
})
export class SkillsPage {
  skills: FirebaseListObservable<any[]>;
  uid: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFire, private _auth: AuthService) {
    this.uid = this.navParams.get('uid');
    this.skills = this.af.database.list('user/'+this.uid+'/skill');
  }

  ionViewDidLoad() {
    console.log("skills uid is "+this.uid);
  }

    increaseSkillLevel(skillName : string){
    this.af.database.object('user/'+this.uid+'/skill/'+skillName+'/level').$ref
    .ref.transaction(skillName => {
            return skillName + 1;
    })
    console.log(skillName);
  }
}
