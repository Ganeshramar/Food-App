import { Capacitor } from '@capacitor/core';
// import { Geolocation, PositionOptions } from '@capacitor/geolocation';
import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  async getCurrentLocation() {
    if(!Capacitor.isPluginAvailable('Geolocation')) {
      return;
    }
    const options: PositionOptions = {
      maximumAge: 3000,
      timeout: 10000,
      enableHighAccuracy: false
    };
    // return await Geolocation.getCurrentPosition(options);
  }
}
