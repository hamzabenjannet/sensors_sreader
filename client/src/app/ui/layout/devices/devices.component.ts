import { Component, OnInit } from '@angular/core';

import { DevicesService } from '../../../services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  selected_device = null;
  devices_list = null;

  constructor(private Devices_Service: DevicesService) { }

  ngOnInit() {
    this.Devices_Service.getDevices().subscribe(devices => {
      console.log(devices);
      this.devices_list = devices;
    });
  }

}
