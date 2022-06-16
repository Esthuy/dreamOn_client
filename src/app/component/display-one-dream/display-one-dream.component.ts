import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dream } from 'src/app/model/dream.model';
import { DreamService } from 'src/app/service/dream.service';

@Component({
  selector: 'app-display-one-dream',
  templateUrl: './display-one-dream.component.html',
  styleUrls: ['./display-one-dream.component.css']
})
export class DisplayOneDreamComponent implements OnInit {

  constructor(route: ActivatedRoute,private dreamService : DreamService, private router : Router) {
    const param_id = route.snapshot.paramMap.get('id');
    this.id = param_id ? parseInt(param_id) : -1;

    if( this.id && this.id > 0 ){
      this.getDream(); 
    }
   }

  dream! : Dream;
  id : number; 

  getDream(){
    this.dreamService.getOneDream(this.id).subscribe({
      next: (dream: Dream) => this.dream = dream,
      error: err => alert("echec"),
    });
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
