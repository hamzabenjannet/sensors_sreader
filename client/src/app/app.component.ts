import { Component } from '@angular/core';

import { DevicesService } from './services/devices.service';

@Component( {
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
 providers: [
 DevicesService,
 ]
})
export class AppComponent {
 title = 'client';
}
