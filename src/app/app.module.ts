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
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

export const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxxxx"
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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},AuthService,LocationService,Geolocation,StatusBar,SplashScreen]
})
export class AppModule {}
