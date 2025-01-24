import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DatePipe } from '@angular/common';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import id from '@angular/common/locales/id';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RouterLink,DatePipe,SearchPipe,FormsModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
recipeList:any=[] //to hold all recipe details
cuisineType:any=[] //to hold all cusine type details
nestedMealArray:any=[]
newMealArray:any=[]
updateMealArray:any=[]
dummyrecipeList:any=[]

date=new Date()
searchkey:string=""

constructor (private api:ApiService,private route:Router){}
ngOnInit():void{
  this.getRecipes()
}
getRecipes(){
  this.api.getAllRecipeAPI().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.recipeList=res
      this.dummyrecipeList=res
      // cuisine filtering
      this.recipeList.forEach((item:any) => {
        !this.cuisineType.includes(item.cuisine)&&this.cuisineType.push(item.cuisine)
        
      });
      console.log(this.cuisineType);
      // mealtype filtering
      this.nestedMealArray=this.recipeList.map((item:any)=>item.mealType)
      console.log(this.nestedMealArray);
      console.log(this.nestedMealArray.flat());
      this.newMealArray= this.nestedMealArray.flat()
      
      
      this.newMealArray.forEach((item:any) => {
        !this.updateMealArray.includes(item)&&this.updateMealArray.push(item)
        
      });
      console.log(this.updateMealArray);
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
  

}

filterRecipe(key:string,value:string){
this.recipeList=this.dummyrecipeList.filter((item:any)=>
  item[key].includes(value))
}

viewRecipe(id:any){
if(sessionStorage.getItem("token")){
  this.route.navigateByUrl(`viewrecipe/${id}`)
}
else{
  alert("Please Login")
}
}
}
