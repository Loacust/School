import { Injectable } from '@angular/core';
import { citiesWeather } from '../components/cities/citiesinfodata';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor() { }

  getWeather(){
    return citiesWeather;
  }
}
