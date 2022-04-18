import { Component } from '@angular/core';
import { GetcitiesService } from './services/getcities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 myName = "Janson"

 constructor(private getCities:GetcitiesService){}
}
