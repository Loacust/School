import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GetCityNamesService } from 'src/app/services/get-city-names.service';

@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent implements OnInit {
  cities: any;
  _cityname:any;
  constructor(private getName: GetCityNamesService,private formB: FormBuilder) { 
    this.cities= this._cityname.getNames();
  }
  techIdeasForm = this.formB.group({
    name: [""],
    age:[""],
    email:[""],
    city:[""],
    brief:[""]
  });

  ngOnInit(): void {};

};