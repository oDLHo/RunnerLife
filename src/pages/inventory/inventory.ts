import { AuthService } from './../../providers/auth-service';
import { AngularFire,  FirebaseListObservable } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Inventory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html'
})
export class InventoryPage {
  uid: any;
  inventorys : FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public _auth: AuthService) {
    this.uid = navParams.get('uid');
    this.inventorys = af.database.list('user/'+this.uid+'/inventory');
  }

  ionViewDidLoad() {
    console.log("inventory uid is "+this.uid);
  }

}
