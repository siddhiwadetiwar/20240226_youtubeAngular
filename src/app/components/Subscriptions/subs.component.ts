import { Component } from '@angular/core';
import { navSide } from "../navigationSide/side-bar.component";
import { topComp } from '../Navigation/top-bar.component';
import { VideoGridComponent } from "../mainScreen/video-grid.component";
import { CommonModule } from '@angular/common';
import { SubscribedVideosComponent } from "../SubFeature/subscribed-videos.component";

@Component({
    selector: 'app-subscriptions',
    standalone: true,
    templateUrl: './subscriptions.component.html',
    styleUrl: './subscriptions.component.css',
    imports: [topComp, navSide, VideoGridComponent, SubscribedVideosComponent]
})
export class SubscriptionsComponent {

}
