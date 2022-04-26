import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { GetCityNamesService } from 'src/app/services/get-city-names.service';
import { invalidWordVal, invalidWordVal2 } from './validationFunction';

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
    name: ["",[Validators.required, Validators.minLength(2), invalidWordVal ]],
    age:[,[Validators.required,]],
    email:["",[Validators.required]],
    city:["",[Validators.required]],
    brief:["",[Validators.required,Validators.minLength(100),invalidWordVal2]]
  });
  }
  ngOnInit(){
  }
onSubmit(){
  console.log(this.techIdeasForm.value)};


get nameFormControl(){
  return this.techIdeasForm.get('name')!
};
get ageFormControl(){
  return this.techIdeasForm.get('age')!
};
get emailFormControl(){
  return this.techIdeasForm.get('email')!
};
get cityFormControl(){
  return this.techIdeasForm.get('city')!
};
get briefFormControl(){
  return this.techIdeasForm.get('brief')!
};

};

