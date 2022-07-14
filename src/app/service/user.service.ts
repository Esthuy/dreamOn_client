import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { loginForm } from '../model/loginForm.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = "http://localhost:8080/user";

  constructor(private client: HttpClient) { }

  obsUserIsConnected = new BehaviorSubject<boolean>(this.connected); 

  obsUser = new BehaviorSubject<string | null>(this.username); 


    // POST
    createUser(user : User){
      return this.client.post<User>(this.BASE_URL, user);
    }

    // GET ONE 
    getOneUser(id : number): Observable<User>{
      return this.client.get<User>(this.BASE_URL + "/id/" + id)
    }

     // GET ONE BY USERNAME
    getOneByUsername(username : string) : Observable<User> {
      return this.client.get<User>(this.BASE_URL + "/username/" + username.trim()); 
    }

    // GET ALL
    getUsers(): Observable<User[]>{
      return this.client.get<User[]>(this.BASE_URL)
    }

    // DELETE
    deleteUser(id : number){
      return this.client.delete<User>(this.BASE_URL + "/" + id)
    }

    // UPDATE
    updateUser(id : number, user : User){
      return this.client.put<User>(this.BASE_URL + "/update/" + id, user)
    }

    // ADD DREAM TO FAVORITE 
    addDreamToFavorite(user : number, dreamUUID : string){
      return this.client.put<User>(this.BASE_URL + "/addToFavorite/" + user, dreamUUID)
    }


    // CONNECTION
    connection(loginForm : loginForm){
      this.client.post<string>("http://localhost:8080/login", loginForm).subscribe({
        next: (token) => {
          localStorage.setItem('token', token); 
          localStorage.setItem('connected',JSON.stringify(this.connected));
          this.obsUserIsConnected.next(this.connected);
          localStorage.setItem('username', loginForm.username);     
          this.obsUser.next(loginForm.username); 
        },
        error: err => alert("Le pseudo ou le mot de passe est incorrect"),
      }); 
    }
  
    // DISCONNECTION
    disconnection(){
      localStorage.removeItem('token'); 
      localStorage.removeItem('connected'); 
      localStorage.removeItem('username');
      this.obsUserIsConnected.next(this.connected);
      this.obsUser.next(null); 
    }
  
  
    get connected(){
      return localStorage.getItem('connected') != null
    }
  
    get username() : string | null {
      return localStorage.getItem('username') 
    }
}

