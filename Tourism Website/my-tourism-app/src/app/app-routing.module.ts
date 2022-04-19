import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
import { HomeComponent } from './components/home/home.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  {path:'cities', component: CitiesComponent},
  {path:'home', component:HomeComponent},
  {path:'tech-ideas', component:TechIdeasComponent},
  {path:'weather', component: WeatherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
