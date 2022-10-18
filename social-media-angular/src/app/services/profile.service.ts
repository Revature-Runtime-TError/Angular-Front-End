import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/User';
import { Observable } from 'rxjs';
import UserInput from '../models/UserInput';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileUrl: string = `${environment.baseUrl}/profile`;
  constructor(private http: HttpClient) {
  }

   
  
   currentUser: User;
   
  
  
   updateUser(updateUser: User){
    
    return this.http.put<User> (this.profileUrl +"/edit", updateUser) ;
   }

  viewprofile(UserInputObject: UserInput): Observable<User>{  
    
    return this.http.post<User>(this.profileUrl + "/viewprofile", UserInputObject);
 }

}




   





