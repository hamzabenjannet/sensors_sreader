import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SensorsService {
 constructor(private http: HttpClient) {
  console.log('init SensorsService');
 }
 getSensors() {
  return this.http.get('http://54.186.188.145:3000/api/sensors');
 }

}
