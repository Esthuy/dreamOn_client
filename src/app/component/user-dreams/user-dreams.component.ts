import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dream } from 'src/app/model/dream.model';
import { User } from 'src/app/model/user.model';
import { DreamService } from 'src/app/service/dream.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-dreams',
  templateUrl: './user-dreams.component.html',
  styleUrls: ['./user-dreams.component.css']
})
export class UserDreamsComponent implements OnInit {

  constructor(private userService : UserService, private dreamService : DreamService, private router: Router) { 
    userService.obsUserIsConnected.subscribe(connected => this.connected = connected); 
    userService.obsUser.subscribe(username => {
      this.username = username;
      if(this.connected){
        this.getInfoUser()
      }
    }); 
   
  }

  dreams : Dream[] = []; 
  nbDreams : number = 0; 

  user! : User; 
  connected! : boolean; 
  username! : string | null; 

  getDreams(){
    this.dreamService.getDreamsByUser(this.user.reference)
    .subscribe({
      next: dreams => this.dreams = dreams,
      complete: () => {
        // this.order(),
        this.nbDreams = this.dreams.length
      },
      error: err => alert("echec"),
    });
  }

  getInfoUser(){
    if(this.username != null){ 
      this.userService.getOneByUsername(this.username).subscribe({
        next : (user: User) => this.user = user,
        complete : () => this.getDreams()
      });
    }
  }

  displayDream(dream : Dream){
  }

  addOneDream(){
    this.router.navigateByUrl('/homepage'); 
  }

  login(){
    this.router.navigateByUrl('/connection'); 
  }


  ngOnInit(): void {
  }

}
