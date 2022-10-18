import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  private profileUrl: string = `${environment.baseUrl}/profile`;
  constructor(private http: HttpClient) { }

  resetPassword(reset: User) {
    return this.http.put<User>(this.profileUrl + "/reset", reset);
  }

  findByEmail(email: string) {
    return this.http.get<User>(this.profileUrl + "/fetch/" + email);
  }
}