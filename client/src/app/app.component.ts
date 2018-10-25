import { Component } from '@angular/core';
import { SensorsService } from './services/sensors.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [
	SensorsService,
	]
})
export class AppComponent {
	title = 'client';
}
