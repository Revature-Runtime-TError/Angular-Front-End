import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/User';
import { Observable } from 'rxjs';
import UserInput from '../models/UserInput';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl: string = "http://localhost:8090/profile";
  constructor(private http:HttpClient) {
    

   }
  
   currentUser: User;
   
  
  
   updateUser(updateUser: User){
    
    return this.http.put<User> (this.baseUrl +"/edit", updateUser) ;
   }

  viewprofile(UserInputObject: UserInput): Observable<User>{  
    
    return this.http.post<User>(this.baseUrl + "/viewprofile", UserInputObject);
    
 }




}



   





