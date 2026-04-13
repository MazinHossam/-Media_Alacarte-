import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"",redirectTo:"The-Platform",pathMatch:'full'},
    {path:"The-Platform",loadComponent:()=>import("./pages/home/home.component").then((c)=>c.HomeComponent),title:"The Platform"},
    {path:"Features",loadComponent:()=>import("./pages/features/features.component").then((c)=>c.FeaturesComponent),title:"Features"},
    {path:"Benefits",loadComponent:()=>import("./pages/benefits/benefits.component").then((c)=>c.BenefitsComponent),title:"Benefits"},
    {path:"Request",loadComponent:()=>import("./pages/request/request.component").then((c)=>c.RequestComponent),title:"Request"},
    {path:"Contact",loadComponent:()=>import("./pages/contact/contact.component").then((c)=>c.ContactComponent),title:"Contact"},
    {path:"About-us",loadComponent:()=>import("./pages/about-us/about-us.component").then((c)=>c.AboutUsComponent),title:"AboutUs"},

];
