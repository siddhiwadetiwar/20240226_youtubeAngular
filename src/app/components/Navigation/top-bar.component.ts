// Importing Component decorator from Angular core module
import { Component } from '@angular/core';

// Importing RouterLink from Angular router module
import { RouterLink } from '@angular/router';

// Defining a component with metadata
@Component({
  // Selector used in HTML to instantiate this component
  selector: 'app-top-bar',

  // Custom property indicating that this component is standalone
  standalone: true,

  // Importing RouterLink (Note: It's usually not necessary to import RouterLink explicitly)
  imports: [RouterLink],

  // Path to the HTML template file for this component
  templateUrl: './top-bar.component.html',

  // Path to the CSS file for styling this component
  styleUrl: './top-bar.component.css',
})
// Class declaration for the component
export class topComp {

  // URL paths for various icons used in the component
  menuIconUrl = 'assets/icons/menu.png';
  youtubeLogoUrl = 'assets/icons/yt_logo.png';
  searchIconUrl = 'assets/icons/search.png';
  voiceSearchIconUrl = 'assets/icons/voice search.png';
  uploadIconUrl = 'assets/icons/upload.png';
  notificationsIconUrl = 'assets/icons/notifications.png';

  // Count of notifications (initially set to '9+')
  notificationsCount = '9+';

  // URL path for the user profile icon
  profileIconUrl = 'assets/icons/use.jpg';

  // Boolean flag indicating whether the settings menu is open or closed
  settingsMenuOpen = false;

  // Method to toggle the state of the settings menu (open/close)
  toggleSettingsMenu() {
    this.settingsMenuOpen = !this.settingsMenuOpen;
  }
}
