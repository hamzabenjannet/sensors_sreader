import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DevicesService } from '../../../services/devices.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  device_id: String;
  device = null;
  // device: {
  //   '_id': String,
  //   'device_id': String,
  //   'd': object,
  //   'meta': {
  //     'name': String,
  //     'data_source': null,
  //     'type': null,
  //     'location': null,
  //     'model': null
  //   },
  //   'display': object
  // };

   hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(
    private route: ActivatedRoute,
    private Devices_Service: DevicesService

  ) { }

  ngOnInit() {
    this.device_id = this.route.snapshot.params.device_id;
    this.Devices_Service.getDeviceByID(this.device_id).subscribe(res_device => {
     console.log(res_device);
      this.device = res_device;
    });

    // for (const key of Object.keys(device)) {
    //   this.device[key] = device[key];
    // }

  }

}

export class Hero {
  id: number;
  name: string;
}

