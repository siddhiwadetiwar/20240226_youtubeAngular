// Importing the Routes module from the '@angular/router' package
import { Routes } from '@angular/router';

// Importing the SubscriptionsComponent from the specified file path
import { SubscriptionsComponent } from './components/Subscriptions/subscriptions.component';

// Importing the HomepageComponent from the specified file path
import { HomepageComponent } from './components/mainHome/homepage.component';

// Importing the SettingsComponent from the specified file path
import { SettingsComponent } from './components/ytSetting/settings.component';

// Defining an array of route configurations using the Routes type
export const routes: Routes = [
    // Configuring a route for the root path ('') with the HomepageComponent as the associated component
    { path: '', component: HomepageComponent },

    // Configuring a route for the 'subscription' path with the SubscriptionsComponent as the associated component
    { path: 'subscription', component: SubscriptionsComponent },

    // Configuring a route for the 'settings' path with the SettingsComponent as the associated component
    { path: 'settings', component: SettingsComponent }
];
