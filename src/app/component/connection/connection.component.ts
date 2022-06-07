import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

 
  constructor(private userService : UserService, private router : Router) {
    userService.obsUserIsConnected.subscribe(connected => this.connected = connected); 
    userService.obsUser.subscribe(username => {
      this.username = username;
      if(this.connected){
        this.getInfoUser(); 
      }
    }); 
   }

  connected!: boolean;
  connection: boolean = false; 
  createAccount: boolean = false;
 

  username! : string | null;  
  user!: User; 

   

  login(){
    this.connection = true; 
  }


  createUser(){
    this.createAccount = true; 
  }


  hideLogin(){
    this.connection = false; 
  }


  hideCreateAccount(){
    this.createAccount = false; 
  }


  ngOnInit(): void {
  }


  getInfoUser(){
    if(this.username != null){ 
      this.userService.getOneByUsername(this.username).subscribe({
        next : (user: User) => this.user = user,
      })
    }
  
  }

  deleteAccount(){
    if(confirm("Êtes-vous sûr de vouloir surrpimer votre compte ? Cette action est définitive, vos rêves seront égalements supprimés")){
      this.disconnection(); 
      this.userService.deleteUser(this.user.id).subscribe({
        complete : () => alert('Votre compte à bien été supprimé, nous esperons vous revoir bientôt !'),
      })
    }
  }



  disconnection(){
    this.userService.disconnection(); 
  }


}
