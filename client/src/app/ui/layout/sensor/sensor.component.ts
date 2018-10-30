import { Component, OnInit } from '@angular/core';
import { SensorsComponent } from '../sensors/sensors.component';
import { SensorService } from '../../../services/sensor.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  sensor_details = null;
  selected_sensor = null;

  constructor(
    private Sensors_Component: SensorsComponent,
    private Sensor_Service: SensorService
  ) {
  }

  ngOnInit() {
    setInterval(() => {
      if (this.Sensors_Component.selected_sensor) {
        this.Sensor_Service.getSensorData(this.Sensors_Component.selected_sensor.device_id).subscribe(sensor => {
          this.sensor_details = sensor;
        });
      }
    }, 1000);

  }

}
