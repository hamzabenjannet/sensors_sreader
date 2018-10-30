import { Component, OnInit } from '@angular/core';
import { SensorsService } from '../../../services/sensors.service';


@Component({
	selector: 'app-sensors',
	templateUrl: './sensors.component.html',
	styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

	selected_sensor = null;
	sensors_list = null;

	constructor(private Sensors_Service:SensorsService ) {


	}

	ngOnInit() {

		var dumy_tymer = 0;

		this.Sensors_Service.getSensors().subscribe(sensors => {
			console.log(sensors)
			// this.sensor = sensors[0];
			// init_sensor = this.sensor;
			this.sensors_list = sensors;
		} )

		
		// setInterval( function(){

			// 	init_sensor.title = dumy_tymer;
			// 	dumy_tymer++;
			// } , 5000)

		}


		get_sensor_details(sensor){
			// console.log(sensor);
			this.selected_sensor = sensor;
		}

	}







