import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './myComponents/home/home.component';
import { SignupComponent } from './myComponents/form/signup/signup.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'signup', component:SignupComponent},
  {path: '', component:HomeComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
