import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetWeatherService } from 'src/app/services/get-weather.service';


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
  constructor(private Route: ActivatedRoute,private getWeather:GetWeatherService) { }

  ngOnInit() {
    this.Route.paramMap.subscribe(params =>
      this.Name = params.get('/weather.name'));
    this.Route.paramMap.subscribe(params =>
      this.SummerM = params.get('summerM'));
    this.Route.paramMap.subscribe(params =>
      this.SummerN = params.get('summerN'));
    this.Route.paramMap.subscribe(params =>
      this.WinterM = params.get('winterM'));
    this.Route.paramMap.subscribe(params =>
      this.WinterN = params.get('winterN'));
    this.Route.paramMap.subscribe(params =>
      this.SpringM = params.get('springM'));
    this.Route.paramMap.subscribe(params =>
      this.SpringN = params.get('springN'));
    this.Route.paramMap.subscribe(params =>
      this.AutumnM = params.get('autumnM'));
    this.Route.paramMap.subscribe(params =>
      this.AutumnN = params.get('name'));
    this.Route.paramMap.subscribe(params =>
      this.Vt = params.get('visitTo'));
    this.Route.paramMap.subscribe(params =>
      this.Vf = params.get('visitFrom'));

  }

}
