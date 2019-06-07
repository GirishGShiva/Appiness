import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  UserForm : FormGroup; //htmlform group-name
  user : any;
  email : any;
  number :any;
  message : any;
  users : any;

  constructor(
    private router : Router,
    
    private formBuilderFB : FormBuilder
  ) {   }

 

  ngOnInit() {

    this.UserForm = this.formBuilderFB.group({
      'user' :['', Validators.required],
        'email' :['',Validators.required],
        'number' :['', Validators.required],
        'message' :['', Validators.required]

    });
  }

    get f() { return this.UserForm.controls; }

    onSubmitUser(){
      this.user= this.f.user.value;
      this.email= this.f.email.value;
      this.number= this.f.number.value;
      this.message= this.f.message.value;


      console.log(this.f.user.value);
    console.log(this.f.email.value);
    console.log(this.f.number.value);
    console.log(this.f.message.value);

     // validating local storage if not empty then pasrse and get local storage and if it is empty then create new array
    let formStorage = localStorage.getItem('formStorage') ? JSON.parse(localStorage.getItem('formStorage')) : [];
    //this is feild value that will store inside the localstorage
    let result = {  user: this.user,
                    email: this.email,
                     number: this.number,
                      message : this.message
      
    };
    if(result.user.length!==0 && result.email.length !== 0 && result.number.length !== 0 && result.message.length !== 0){
    formStorage.unshift(result);
    localStorage.setItem('formStorage',JSON.stringify(formStorage));
    alert('saved the form data');
    console.log(result);
    }else{
        alert('please fill the deatils properly');
    }
    }
    
   





  



  }
  (function(){
   let localData = JSON.parse(localStorage.getItem('formStorage'));
   let girish = document.querySelector('.girish');
   console.log(girish)
  //  girish.innerHTML =`
  //   <h1>${localData[0]}</h1>
   
  //  `
  })()



