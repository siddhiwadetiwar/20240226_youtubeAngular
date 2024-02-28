import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribed-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscribed-videos.component.html',
  styleUrl: './subscribed-videos.component.css',
})
export class SubscribedVideosComponent {
  videoData = [
    {
      thumbnail: 'thumb1.jpg',
      time: '30:41',
      channelImage: 'sub.jpg',
      title: 'AI Engineer Roadmap | How Id Learn AI in 2024',
      author: 'codebasics',
      views: '55K views  4 days ago',
      subscribed: true,
    },

    {
      thumbnail: 'thumb2.jpg',
      time: '18:19',
      channelImage: 'chan-3.jpg',
      title: 'Brain Hack: 6 secrets to learning faster, backed by neuroscience ',
      author: 'TEDx Talks',
      views: '2.9M views  9 months ago',
      subscribed: true,
    },

    {
      thumbnail: 'thumb3.jpg',
      time: '22:13',
      channelImage: 'chan5.jpg',
      title: "Simplify LLMOps & Build LLM Pipeline in Minutes",
      author: 'Kris Naik',
      views: '15K views  10 days ago',
      subscribed: true,
    },

    {
      thumbnail: 'thumb4.jpg',
      time: '4:10',
      channelImage: 'chan4.jpg',
      title: 'They made React great again?',
      author: 'Fireship',
      views: '376k views  11 hours ago',
      subscribed: true,
    },



  ];
}
