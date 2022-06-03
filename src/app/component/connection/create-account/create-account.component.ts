import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { samePasswords, USER_INSERT_FORM } from 'src/app/form/user.form';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  
  constructor(builder: FormBuilder, private router: Router) { 
    this.userInsertForm = builder.group(USER_INSERT_FORM, {
      validators : samePasswords}); 
  }

  userInsertForm : FormGroup; 
  userToAdd! : User; 



  onSubmit(){
    if(this.userInsertForm.valid){
      this.userToAdd = this.userInsertForm.value;  
      // this.service.createUser(this.userToAdd).subscribe({
      //   complete: () => {
      //             this.userInsertForm.reset();  
      //             this.router.navigateByUrl('/homepage'); 
      //           },
      //   error: (error) => alert(error.error.message),
      // }); 
    }
  }


  return(){
    this.userInsertForm.reset();
  }


  ngOnInit(): void {
  }

}
