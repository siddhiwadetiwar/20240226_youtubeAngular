import { Component } from '@angular/core';
import { navSide } from "../navigationSide/side-bar.component";
import { topComp } from "../Navigation/top-bar.component";

@Component({
    selector: 'app-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.css',
    imports: [navSide, topComp]
})
export class SettingsComponent {

}


