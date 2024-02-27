import { Component } from '@angular/core';
import { SubscriptionsComponent } from "../Subscriptions/subscriptions.component";
import { VideoGridComponent } from "../mainScreen/video-grid.component";
import { navSide } from "../navigationSide/side-bar.component";
import { topComp } from "../Navigation/top-bar.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [SubscriptionsComponent, VideoGridComponent, navSide, topComp]
})
export class HomepageComponent {

}
