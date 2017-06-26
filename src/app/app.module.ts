import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {RedditsPage} from "../pages/reddits/reddits";
import {SettingsPage} from "../pages/settings/settings";
import {RedditService} from "./services/reddit.service";
import {DetailsPage} from "../pages/details/details";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    RedditsPage,
    SettingsPage,
    DetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    RedditsPage,
    SettingsPage,
    DetailsPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    RedditService
  ]
})
export class AppModule {}
