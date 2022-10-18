
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from 'src/app/services/profile.service';
import User from 'src/app/models/User';
import UserInput from 'src/app/models/UserInput';
import { NgIf } from '@angular/common';
import { PostService } from 'src/app/services/post.service';
import Post from 'src/app/models/Post';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
  
})
export class NavbarComponent implements OnInit{
 
  

  constructor(private authService: AuthService, private router: Router, private UserService: ProfileService, private PostService: PostService) { }
  
  posts: Post[] = [];
  
  searchedUser: User = {
    id: 0,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    bio: ""
  }
  UserInputObject: UserInput = {
    firstname: "",
    lastname: ""
  }
  JSONuser: any; 

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  
  DarkToggle() {
    var element = document.body.classList.toggle("darkmode");
    element;
  }


  profile() {
    this.router.navigate(['profile']);
  }

  searchProfile()  {
  
     this.UserService.viewprofile(this.UserInputObject).subscribe((response)=>{
      if(response == null) {
        
        return
      }
      else {
     
       this.searchedUser = response;
       

      this.JSONuser = JSON.stringify(this.searchedUser);
      sessionStorage.setItem("searchedUser", this.JSONuser);
    
      this.router.navigate(['profile/viewprofile']);
      }
  })
}
}
