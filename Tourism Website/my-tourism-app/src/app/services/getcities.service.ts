import { Injectable } from '@angular/core';
import { Citiesinfo } from '../components/cities/citiesinfodata';

@Injectable({
  providedIn: 'root'
})
export class GetcitiesService {


  getCities(){
    return Citiesinfo;
  }
  
  constructor() { }
  }