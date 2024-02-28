import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { topComp } from "./components/Navigation/top-bar.component";
import { navSide } from "./components/navigationSide/side-bar.component";
import { VideoGridComponent } from "./components/mainScreen/video-grid.component";
import { SubscriptionsComponent } from "./components/Subscriptions/subscriptions.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, topComp, navSide, VideoGridComponent, SubscriptionsComponent, RouterLink, RouterLinkActive]
})
export class AppComponent {
  title = 'youtube-using-angular';
}
