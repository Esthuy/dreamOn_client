import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient) { }

  private readonly BASE_URL = "http://localhost:8080/user";

    // POST
    createUser(user : User){
      return this.client.post<User>(this.BASE_URL, user);
    }
}
