import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppRouting} from "./app.routing";

import { AppComponent } from './app.component';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LoginComponent } from './landing-page/login/login.component';
import { NavigationComponent } from './landing-page/navigation/navigation.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { FeaturesComponent } from './landing-page/features/features.component';
import { HomeComponent } from './landing-page/home/home.component';
import { RegisterComponent } from './landing-page/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    NavigationComponent,
    FooterComponent,
    FeaturesComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
