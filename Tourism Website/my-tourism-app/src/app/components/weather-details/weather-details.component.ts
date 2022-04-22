import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetWeatherService } from 'src/app/services/get-weather.service';
import { GetcitiesService } from 'src/app/services/getcities.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  Name:any;
  SummerM:any;
  SummerN:any;
  WinterM:any;
  WinterN:any;
  SpringM:any;
  SpringN:any;
  AutumnM:any;
  AutumnN:any;
  Vt:any;
  Vf:any;
  getWeather:any;
  constructor(private Route: ActivatedRoute) { }

  ngOnInit() {
    this.Route.paramMap.subscribe(params =>{
      this.Name = params.get('name')
    
      this.SummerM = params.get('summerM');
    
      this.SummerN = params.get('summerN');
    
      this.WinterM = params.get('winterM');
   
      this.WinterN = params.get('winterN');
    
      this.SpringM = params.get('springM');
    
      this.SpringN = params.get('springN');
  
      this.AutumnM = params.get('autumnM');
   
      this.AutumnN = params.get('autumnN');
    
      this.Vt = params.get('visitTo');
   
      this.Vf = params.get('visitFrom')});

  }



}
