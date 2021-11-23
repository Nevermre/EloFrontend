import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadComponent } from './lead/lead.component';
import {LoginComponent} from './login/login.component'
import { AuthGuard } from './auth.guard';
import { LeadFormComponent } from './lead-form/lead-form.component';
const routes: Routes = [{path:'login', component:LoginComponent},
{path:'',  children:[
  {path: "home", component: LeadComponent, canActivate: [AuthGuard]},
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path: "home/form", component: LeadFormComponent, canActivate: [AuthGuard]}

]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
