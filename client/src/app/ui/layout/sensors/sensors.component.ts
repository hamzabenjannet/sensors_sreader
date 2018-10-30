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

 constructor(private Sensors_Service: SensorsService ) {
 }

 ngOnInit() {
  this.Sensors_Service.getSensors().subscribe(sensors => {
   console.log(sensors);
   this.sensors_list = sensors;
  });
 }
 get_sensor_details(sensor) {
  this.selected_sensor = sensor;
 }

}







