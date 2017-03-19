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
    IonicModule.forRoot(MyApp)
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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
