import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import Post from 'src/app/models/Post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = {} as User;

  foundposts: Post[] = [];
 

constructor(private authService: AuthService,private router: Router, private PostService: PostService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser
  }
  
  edit() {
    this.router.navigate(['profile/edit']);
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
  loadPosts() {
    
    this.PostService.seeUsersPosts(this.user.id).subscribe((response)=>{
      console.log(this.user.id);
      
     
       this.foundposts= response;
       console.log(this.foundposts);

      
      return this.foundposts;

     

  })
}
}
