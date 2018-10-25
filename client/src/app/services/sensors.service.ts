import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class SensorsService {
	constructor(private http: HttpClient){
		console.log('init SensorsService');
	}
	getSensors(){
		return this.http.get('http://localhost:3000/api/sensors');
	}
	



}