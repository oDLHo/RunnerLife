import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public popCtrl: PopoverController, public viewCtrl: ViewController) {
    
  }

  goMainPage(){
    this.navCtrl.push(RegisterPage);
  }

  popRegister(myEvent){
    this.popCtrl.create(RegisterPage).present({
      ev: myEvent
    });
  }
}
