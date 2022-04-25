import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GetCityNamesService } from 'src/app/services/get-city-names.service';

@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent implements OnInit {
  cities: any;
  techIdeasForm:any;

  constructor(private _cityname: GetCityNamesService,private formB: FormBuilder) { 
    this.cities= this._cityname.getNames();
    this.techIdeasForm = formB.group({
    name: ["",[Validators.required, Validators.minLength(3)]],
    age:[],
    email:[""],
    city:[""],
    brief:[""]
  });
  }
  ngOnInit(){}

};