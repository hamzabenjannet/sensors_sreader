import { Component, OnInit } from '@angular/core';
import { SensorsComponent } from '../sensors/sensors.component';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  sensor_details = null;

  constructor(private Sensors_Component: SensorsComponent ) { }

  ngOnInit() {
    this.sensor_details = this.Sensors_Component.selected_sensor;
    console.log(this.sensor_details);
  }

}
