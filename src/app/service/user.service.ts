import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = "http://localhost:8080/user";

  constructor(private client: HttpClient) { }


    // POST
    createUser(user : User){
      return this.client.post<User>(this.BASE_URL, user);
    }
}
