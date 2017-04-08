import { AuthService } from './../../providers/auth-service';
import { AngularFire } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Collection page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html'
})
export class CollectionPage {
  uid: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public _auth: AuthService ) {
    this.uid = this.navParams.get('uid');
  }

  ionViewDidLoad() {
    console.log("inventory uid is "+this.uid);
  }

}
