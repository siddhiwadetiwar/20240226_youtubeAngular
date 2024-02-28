// Importing the CommonModule from Angular for common directives like ngIf, ngFor, etc.
import { CommonModule } from '@angular/common';

// Importing the Component decorator from Angular for defining components.
import { Component } from '@angular/core';

// Importing the RouterLink from Angular for creating navigation links.
import { RouterLink } from '@angular/router';

// Defining a component named 'app-side-bar' with some metadata using the Component decorator.
@Component({
  // Selector for the component in HTML.
  selector: 'app-side-bar',

  // A custom property 'standalone' set to true (Note: 'standalone' is a non-standard property, might be specific to the application).

  standalone: true,

  // Importing necessary modules for this component.
  imports: [CommonModule, RouterLink],

  // Path to the HTML file that defines the structure of this component.
  templateUrl: './side-bar.component.html',

  // Path to the CSS file that provides styles for this component.
  styleUrl: './side-bar.component.css'
})

// Defining a class named 'navSide' which serves as the controller for the component.
export class navSide {

  // Array of buttons for the 'Explore' section.
  exploreButtons = [
    { icon: 'trending.png', text: 'Trending', class: 'trending-icon' },
    { icon: 'music.png', text: 'Music', class: 'music-icon' },
    { icon: 'gaming.png', text: 'Gaming', class: 'gaming-icon' }
  ];

  // Array of buttons for the 'You' section.
  youButtons = [
    { icon: 'your channel.png', text: 'Your channel', class: 'your-channel-icon' },
    { icon: 'history.png', text: 'History', class: 'history-icon' },
    { icon: 'your videos.png', text: 'Your videos', class: 'your-videos-icon' },
    { icon: 'watch later.png', text: 'Watch Later', class: 'watch-later-icon' },
    { icon: 'liked videos.png', text: 'Liked videos', class: 'liked-videos-icon' }
  ];

  // Array of buttons for the 'General' section.
  generalButtons = [
    { icon: 'home.png', text: 'Home', class: 'home-icon' },
    { icon: 'shorts.png', text: 'Shorts', class: 'shorts-icon' },
    { icon: 'subscriptions.png', text: 'Subscriptions', class: 'subscriptions-icon' },
    { icon: 'youtube-music.png', text: 'YouTube Music', class: 'youtube-music-icon' }
  ];
}
