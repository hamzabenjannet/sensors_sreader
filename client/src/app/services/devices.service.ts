import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DevicesService {
 constructor(private http: HttpClient) {
  console.log('init DevicesService');
 }
 getDevices() {
  return this.http.get('http://54.186.188.145:3000/api/devices');
 }

 getDeviceByID(device_id) {
  return this.http.get('http://54.186.188.145:3000/api/devices/device/' + device_id);
 }


}
