import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class navSide {
  exploreButtons = [
    { icon: 'trending.png', text: 'Trending', class: 'trending-icon' },
    { icon: 'music.png', text: 'Music', class: 'music-icon' },
    { icon: 'gaming.png', text: 'Gaming', class: 'gaming-icon' }
  ];

  youButtons = [
    { icon: 'your channel.png', text: 'Your channel', class: 'your-channel-icon' },
    { icon: 'history.png', text: 'History', class: 'history-icon' },
    { icon: 'your videos.png', text: 'Your videos', class: 'your-videos-icon' },
    { icon: 'watch later.png', text: 'Watch Later', class: 'watch-later-icon' },
    { icon: 'liked videos.png', text: 'Liked videos', class: 'liked-videos-icon' }
  ];

  generalButtons = [
    { icon: 'home.png', text: 'Home', class: 'home-icon' },
    { icon: 'shorts.png', text: 'Shorts', class: 'shorts-icon' },
    { icon: 'subscriptions.png', text: 'Subscriptions', class: 'subscriptions-icon' },
    { icon: 'youtube-music.png', text: 'YouTube Music', class: 'youtube-music-icon' }
  ];

}
