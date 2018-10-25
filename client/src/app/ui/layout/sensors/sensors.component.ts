import { Component, OnInit } from '@angular/core';
import { SensorsService } from '../../../services/sensors.service';


@Component({
	selector: 'app-sensors',
	templateUrl: './sensors.component.html',
	styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {


	sensor ={_id:null,title:null,isDone:null}


	constructor(private Sensors_Service:SensorsService ) {


	}

	ngOnInit() {
		var init_sensor = this.sensor;
		var dumy_tymer = 0;

		this.Sensors_Service.getSensors().subscribe(sensors => {
			console.log(sensors)
			this.sensor = sensors[0];
			init_sensor = this.sensor;
		} )

		
		setInterval( function(){

			init_sensor.title = dumy_tymer;
			dumy_tymer++;
		} , 5000)

	}

}
