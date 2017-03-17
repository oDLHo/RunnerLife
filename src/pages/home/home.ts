import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CollectionPage } from '../collection/collection';
import { SkillsPage } from '../skills/skills';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goMainPage(){
    this.navCtrl.push(SkillsPage);
  }
}
