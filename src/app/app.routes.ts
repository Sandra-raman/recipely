import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ViewrecipesComponent } from './viewrecipes/viewrecipes.component';
import { SavedrecipesComponent } from './savedrecipes/savedrecipes.component';
import { ProfileComponent } from './profile/profile.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'register',component:RegisterComponent
    },
    {
        path:'allrecipe',component:RecipesComponent
    },
    {
        path:'viewrecipe/:id',component:ViewrecipesComponent
    },
    {
        path:'savedrecipes',component:SavedrecipesComponent
    },
    {
        path:'profile',component:ProfileComponent
    },
    {
        path:'**',component:PnfComponent
    },
];
