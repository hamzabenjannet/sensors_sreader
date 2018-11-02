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
    if (this.Sensors_Component.selected_sensor) {
      // const nsp = this.Sensors_Component.selected_sensor.device_id;

      // this.socket = socketIo('http://54.186.188.145:3000/sensors/device/ws/' + nsp);
      // this.socket.on('message', (data: Message) => observer.next(data) );
    }

    // setInterval(() => {
    //   if (this.Sensors_Component.selected_sensor) {
    //     this.Sensor_Service.getSensorData(this.Sensors_Component.selected_sensor.device_id).subscribe(sensor => {
    //       this.sensor_details = sensor;
    //     });
    //   }
    // }, 1000);

  }

}
