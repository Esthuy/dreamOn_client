import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  
  constructor(builder: FormBuilder, private router: Router, private service: UserService) { 
    this.userInsertForm = builder.group(USER_INSERT_FORM, {
      validators : samePasswords}); 
  }

  userInsertForm : FormGroup; 
  userToAdd! : User; 


  @Output('return')
  returnEmit = new EventEmitter(); 

  onSubmit(){
    if(this.userInsertForm.valid){
      this.userToAdd = this.userInsertForm.value;  
      this.service.createUser(this.userToAdd).subscribe({
        complete: () => {
                  this.userInsertForm.reset();  
                  this.router.navigateByUrl('/homepage'); 
                  alert("Votre compte a bien été créé, vous pouvez maintenant vous connecter !")
                },
        error: (error) => alert(error.error.message),
      }); 
    }
  }


  return(){
    this.userInsertForm.reset();
    this.returnEmit.emit(); 
  }


  ngOnInit(): void {
  }

}
