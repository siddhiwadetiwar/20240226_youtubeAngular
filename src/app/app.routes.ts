import { Routes } from '@angular/router';
import {SubscriptionsComponent} from './components/Subscriptions/subscriptions.component';
import { HomepageComponent } from './components/mainHome/homepage.component';
import { SettingsComponent } from './components/ytSetting/settings.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'subscription', component: SubscriptionsComponent },
    { path: 'settings', component:SettingsComponent}
];
