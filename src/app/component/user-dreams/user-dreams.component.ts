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

  orderStr : string = "date"; 
  input: string = ""; 
  searchType: string = "title"; 
  displayReset: boolean = false; 

  getDreams(){
    this.dreamService.getDreamsByUser(this.user.reference)
    .subscribe({
      next: dreams => this.dreams = dreams,
      complete: () => {
        this.order(),
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
    this.router.navigate(['dream', dream.id]);
  }

  addOneDream(){
    this.router.navigateByUrl('/homepage'); 
  }

  login(){
    this.router.navigateByUrl('/connection'); 
  }


  ngOnInit(): void {
  }

  order(){
    if(this.orderStr === "date"){
      this.dreams = this.dreams.sort((dream1, dream2) => <any>new Date(dream2.date) - <any>new Date(dream1.date));

    } else if (this.orderStr ==="note"){
      this.dreams = this.dreams.sort((dream1, dream2) => dream2.stars - dream1.stars); 

    }else if (this.orderStr ==="asc"){
      this.dreams = this.dreams.sort((dream1, dream2) => dream1.title.localeCompare(dream2.title));

    }else{
      this.dreams = this.dreams.sort((dream1, dream2) => dream2.title.localeCompare(dream1.title));

    }
}

search(){
  if(this.input.trim() == ""){
    this.getDreams(); 
  } else {
    switch(this.searchType){
      case "title":{
        this.dreamService.getDreamsByTitle(this.user.reference,this.input).subscribe({
          next: dreams => this.dreams = dreams,
          complete : () => {
            this.order() 

            if(this.dreams.length < this.nbDreams){
              this.displayReset = true; 
            }else{
              this.displayReset = false; 
            }
          },

          error: err => alert("echec"),
        });

        break;
      }

      // case "address": {
      //   this.service.getByAddress(this.input).subscribe({
      //     next: restaurantsList => this.restaurants = restaurantsList,

      //     complete : () => {
      //       this.order(),
      //       this.getStarAverage()

      //       if(this.restaurants.length < this.nbRestaurant){
      //         this.displayReset = true; 
      //       }
      //     },

      //     error: err => alert("echec"),
      //   });

      //   break; 
      // }

      // case "typeOfFood": {
      //   this.service.getByTypeOfFood(this.input).subscribe({
      //     next: restaurantsList => this.restaurants = restaurantsList,

      //     complete : () => {
      //       this.order(),
      //       this.getStarAverage()

      //       if(this.restaurants.length < this.nbRestaurant){
      //         this.displayReset = true; 
      //       }
      //     },

      //     error: err => alert("echec"),
      //   });

      //   break; 
      // }
    }
  }
}


reset(){
  this.getDreams(); 
  this.displayReset = false; 
  this.input = ""; 
}

}
