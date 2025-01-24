import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 testimonyForm:FormGroup
 constructor(private fb:FormBuilder ,private api:ApiService){
  this.testimonyForm=this.fb.group({
    name:["",[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
    email:["",[Validators.required,Validators.email]],
    message:["",[Validators.required,Validators.pattern("[a-zA-Z ]*")]]
  })
 }

 addTestimony(){
  if (this.testimonyForm.valid) {
    let name=this.testimonyForm.value.name;
    let email=this.testimonyForm.value.email;
    let message=this.testimonyForm.value.message;
    this.api.addTestimonyAPI({name,email,message}).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert("Thank you for you feedback")
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  } else {
    alert("Invalid form")
  }
 }
}
