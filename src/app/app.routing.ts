import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LoginComponent} from "./landing-page/login/login.component";
import { FeaturesComponent} from "./landing-page/features/features.component";
import { HomeComponent} from "./landing-page/home/home.component";
import { RegisterComponent } from "./landing-page/register/register.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'features', component: FeaturesComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouting {}
