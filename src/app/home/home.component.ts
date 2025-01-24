import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homerecipeList:any=[]
  constructor(private api:ApiService){}
  ngOnInit():void{
    this.gethomeRecipe()
  }
  gethomeRecipe(){
    this.api.getAllRecipeAPI().subscribe((res:any)=>{
      console.log(res);
      this.homerecipeList=res.slice(-6)
      console.log(this.homerecipeList);
      
    })
  }
}
