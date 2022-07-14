import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dream } from 'src/app/model/dream.model';
import { User } from 'src/app/model/user.model';
import { DreamService } from 'src/app/service/dream.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-display-one-dream',
  templateUrl: './display-one-dream.component.html',
  styleUrls: ['./display-one-dream.component.css']
})
export class DisplayOneDreamComponent implements OnInit {

  constructor(route: ActivatedRoute, private dreamService : DreamService, private router : Router, private userService : UserService) {
    const param_id = route.snapshot.paramMap.get('id');
    this.id = param_id ? parseInt(param_id) : -1;

    if( this.id && this.id > 0 ){
      this.getDream(); 
    }

    userService.obsUserIsConnected.subscribe(connected => this.connected = connected); 
    userService.obsUser.subscribe(username => {
      this.username = username;
      if(this.connected){
        this.getInfoUser()
      }
   });
  }


  dream! : Dream;
  id : number;
  
  user! : User; 
  connected! : boolean; 
  username! : string | null; 

  getDream(){
    this.dreamService.getOneDream(this.id).subscribe({
      next: (dream: Dream) => this.dream = dream,
      error: err => alert("echec"),
    });
  }

  
  getInfoUser(){
    if(this.username != null){ 
      this.userService.getOneByUsername(this.username).subscribe({
        next : (user: User) => this.user = user
      });
    }
  }

  addToFavorite(){
    this.userService.addDreamToFavorite(this.user.id, this.dream.reference).subscribe({
      next : () => alert("Ce rêve a bien été ajouté à vos favoris"),
      error: () => alert("Erreur - votre rêve n'a pas pu être ajouté à vos favoris.")
    })
  }

  update(){}

  delete(){
    if(confirm("Êtes-vous sûr de vouloir supprimer ce rêve ?")){
      this.dreamService.deleteDream(this.dream.id).subscribe({
        next : () => alert("Votre rêve a bien été supprimé"),
        complete : () => this.router.navigateByUrl("/dreams"), 
        error: () => alert("Erreur - votre rêve n'a pas pu être supprimé.") 
      });
    }
  };

  return(){
    this.router.navigateByUrl("/dreams");
  }

  ngOnInit(): void {
  }

}
