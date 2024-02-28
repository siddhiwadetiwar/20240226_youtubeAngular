// Importing CommonModule from Angular common module
import { CommonModule } from '@angular/common';

// Importing Component decorator from Angular core module
import { Component } from '@angular/core';

// Component decorator configuration
@Component({
  // Selector for the component
  selector: 'app-video-grid',

  // Custom property indicating it's a standalone component
  standalone: true,

  // Importing CommonModule as part of the module
  imports: [CommonModule],

  // Template file for the component
  templateUrl: './video-grid.component.html',

  // Stylesheet file for the component
  styleUrl: './video-grid.component.css'
})

// VideoGridComponent class definition
export class VideoGridComponent {

  // Array containing video data objects
  videoData = [
    {
      thumbnail: 'thumb4.jpg',
      time: '4:10',
      channelImage: 'chan4.jpg',
      title: 'They made React great again?',
      author: 'Fireship',
      views: '376k views  11 hours ago',
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
      thumbnail: 'thumb2.jpg',
      time: '18:19',
      channelImage: 'chan-3.jpg',
      title: 'Brain Hack: 6 secrets to learning faster, backed by neuroscience ',
      author: 'TEDx Talks',
      views: '2.9M views  9 months ago',
      subscribed: true,
    },
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
      thumbnail: 'thumb1.jpg',
      time: '30:41',
      channelImage: 'sub.jpg',
      title: 'AI Engineer Roadmap | How Id Learn AI in 2024',
      author: 'codebasics',
      views: '55K views  4 days ago',
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
      thumbnail: 'thumb2.jpg',
      time: '18:19',
      channelImage: 'chan-3.jpg',
      title: 'Brain Hack: 6 secrets to learning faster, backed by neuroscience ',
      author: 'TEDx Talks',
      views: '2.9M views  9 months ago',
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
];


}
