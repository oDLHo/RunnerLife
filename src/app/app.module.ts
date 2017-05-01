import { LocationService } from './../providers/location-service';
import { Geolocation } from '@ionic-native/geolocation';
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
    apiKey: "AIzaSyD9FTWA3r-xOHoW1jqjNmF1ZcqoO66tRJM",
    authDomain: "runnerlifeapp.firebaseapp.com",
    databaseURL: "https://runnerlifeapp.firebaseio.com",
    projectId: "runnerlifeapp",
    storageBucket: "runnerlifeapp.appspot.com",
    messagingSenderId: "555438946086"
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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},AuthService,LocationService,Geolocation]
})
export class AppModule {}
