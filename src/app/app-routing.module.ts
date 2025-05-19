
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './myComponents/home/home.component';
import { SignupComponent } from './myComponents/form/signup/signup.component';
import { LoginComponent } from './myComponents/form/login/login.component';
import { ProductListComponent } from './myComponents/product-list/product-list.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'productList', component:ProductListComponent},
  {path: '', component:HomeComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
