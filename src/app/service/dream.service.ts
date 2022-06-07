import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dream } from '../model/dream.model';

@Injectable({
  providedIn: 'root'
})
export class DreamService {

  private readonly BASE_URL = "http://localhost:8080/dreams";

  constructor(private client: HttpClient) { }

   // POST
   createUser(dream : Dream){
    return this.client.post<Dream>(this.BASE_URL, dream);
  }

  // GET ONE 
  getOneUser(id : number): Observable<Dream>{
    return this.client.get<Dream>(this.BASE_URL + "/id/" + id);
  }

  // GET DREAMS BY USER
  getDreamsByUser(username : string): Observable<Dream[]>{
    return this.client.get<Dream[]>(this.BASE_URL + "/user/" + username);
  }

  // GET ALL 
  getAllDreams(): Observable<Dream[]>{
    return this.client.get<Dream[]>(this.BASE_URL + "/all"); 
  }

  // DELETE 
  deleteDream(id : number): Observable<Dream>{
    return this.client.delete<Dream>(this.BASE_URL + id); 
  }

  // UPDATE
  updateDream(id : number, dream : Dream): Observable<Dream>{
    return this.client.put<Dream>(this.BASE_URL + id, dream); 
  }
}
