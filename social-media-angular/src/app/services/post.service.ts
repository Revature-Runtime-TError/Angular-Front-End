import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Post from '../models/Post';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl: string = "http://localhost:8090/post";
  baseUrl: string = "http://localhost:8090/auth";

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postUrl}`, {headers: environment.headers, withCredentials: environment.withCredentials} )
  }

  upsertPost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.postUrl}`, post, {headers: environment.headers, withCredentials: environment.withCredentials})
  }
 
  findAuthorByName(firstName: string, lastName: string)
  {
    return this.http.get<User>(this.postUrl+"/fetched/"+firstName+"/"+lastName);
  }
  
  seeFirst(authorId: number)
  {
    console.log(authorId);
    console.log(this.postUrl+"/seeFirst/"+authorId);
    return this.http.get<Post[]>(this.postUrl+"/seeFirst/"+authorId);
  }
}
