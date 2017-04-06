import { AuthService } from './../providers/auth-service';
import { InventoryPage } from './../pages/inventory/inventory';
import { GachapongPage } from './../pages/gachapong/gachapong';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CollectionPage } from '../pages/collection/collection'
import { SkillsPage } from '../pages/skills/skills';
import { UserinfoPage } from '../pages/userinfo/userinfo';
import { RegisterPage } from '../pages/register/register';
import { SettingPage } from '../pages/setting/setting';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyCjwmBiJl170E68GsJktvIhxK6O2GD-eV8",
  authDomain: "runnerlife-3b67f.firebaseapp.com",
  databaseURL: "https://runnerlife-3b67f.firebaseio.com",
  projectId: "runnerlife-3b67f",
  storageBucket: "runnerlife-3b67f.appspot.com",
  messagingSenderId: "46089078531"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CollectionPage,
    SkillsPage,
    UserinfoPage,
    RegisterPage,
    SettingPage,
    GachapongPage,
    InventoryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CollectionPage,
    SkillsPage,
    UserinfoPage,
    RegisterPage,
    SettingPage,
    GachapongPage,
    InventoryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},AuthService]
})
export class AppModule {}
