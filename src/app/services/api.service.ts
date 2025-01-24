import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url='http://localhost:3000'

  constructor(private http:HttpClient) { }

  getAllRecipeAPI(){
    return this.http.get(`${this.server_url}/allRecipes`)
  }
//path: http://localhost:3000/addTestimony
  addTestimonyAPI(reqBody:any){
    return this.http.post(`${this.server_url}/addTestimony`,reqBody)
  }
 //path: http://localhost:3000/register
 registerAPI(reqBody:any){
  return this.http.post(`${this.server_url}/register`,reqBody)
 } 
 //path: http://localhost:3000/login
 loginAPI(reqBody:any){
  return this.http.post(`${this.server_url}/login`,reqBody)
 } 
}
