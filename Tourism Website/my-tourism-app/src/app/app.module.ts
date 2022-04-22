import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { WeatherComponent } from './components/weather/weather.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { CitiesComponent } from './components/cities/cities.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { IportantTextDirective } from './directives/iportant-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    TechIdeasComponent,
    CitiesComponent,
    WeatherDetailsComponent,
    IportantTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
