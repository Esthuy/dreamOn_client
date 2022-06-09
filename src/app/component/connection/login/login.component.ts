import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { USER_INSERT_FORM } from 'src/app/form/user.form';
import { loginForm } from 'src/app/model/loginForm.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInsertForm : FormGroup; 
  loginForm : loginForm = {
    username:"", 
    password:""
  }


  @Output('return')
  returnEmit = new EventEmitter(); 


  constructor(private service : UserService, private router : Router, builder: FormBuilder) { 
    this.userInsertForm = builder.group(USER_INSERT_FORM); 
  } 

  connection(){
    this.loginForm.username = this.userInsertForm.value.username;
    this.loginForm.password = this.userInsertForm.value.password;
    
    this.service.connection(this.loginForm);  
  }


  return(){
    this.userInsertForm.reset(); 
    this.returnEmit.emit(); 
  }

  ngOnInit(): void {
  }

}


