import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl: string = "http://localhost:8090/profile";
  constructor(private http:HttpClient) {
    

   }
  

   updateUser(updateUser: User){
    
    return this.http.put<User> (this.baseUrl +"/edit", updateUser) ;
   }
}

