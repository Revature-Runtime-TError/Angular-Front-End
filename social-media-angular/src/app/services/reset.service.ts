import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  private baseUrl: string = "http://localhost:8090/profile";
  constructor(private http: HttpClient) { }

  resetPassword(reset: User) {
    return this.http.put<User>(this.baseUrl + "/reset", reset);
  }

  findByEmail(email: string) {
    return this.http.get<User>(this.baseUrl + "/fetch/" + email);
  }
}