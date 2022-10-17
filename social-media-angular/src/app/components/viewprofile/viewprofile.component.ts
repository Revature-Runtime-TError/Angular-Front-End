import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import User from 'src/app/models/User';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import UserInput from 'src/app/models/UserInput';
import Post from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Input } from '@angular/core';


@Component({
  selector: 'viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  postForm = new FormGroup({
    text: new FormControl(''),
    imageUrl: new FormControl('')
  })

  foundposts: Post[] = [];
  
 
 

  user: User = {} as User;

  commentForm = new FormGroup({
    text: new FormControl(''),
  })

  UserInputObject: UserInput = {
    firstname: "",
    lastname: ""
  }
  JSONuser: any;
  JSONposts: any;

  



  constructor(private authService: AuthService,private router: Router, private PostService: PostService) { }

  ngOnInit(): void  {
    this.JSONuser = sessionStorage.getItem("searchedUser")!;
      this.user = JSON.parse(this.JSONuser);
      
      
      
      
   
}





  loadPosts() {
    
    this.PostService.seeUsersPosts(this.user.id).subscribe((response)=>{
      console.log(this.user.id);
      
     
       this.foundposts= response;
       console.log(this.foundposts);

      
      return this.foundposts;

     

  })
}
 
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  home() {
    this.router.navigate(['post-feed']);
  }
  DarkToggle() {
    var element = document.body.classList.toggle("darkmode");
    element;
  }
  
}

   

