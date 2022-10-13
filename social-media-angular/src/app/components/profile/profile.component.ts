import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = {} as User;

 

constructor(private authService: AuthService,private router: Router) { }

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
}
