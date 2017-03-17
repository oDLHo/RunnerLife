import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CollectionPage } from '../pages/collection/collection'
import { SkillsPage } from '../pages/skills/skills';
import { UserinfoPage } from '../pages/userinfo/userinfo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CollectionPage,
    SkillsPage,
    UserinfoPage
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
    UserinfoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
