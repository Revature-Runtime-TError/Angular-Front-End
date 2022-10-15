import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import User from 'src/app/models/User';

@Component({
  selector: 'viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  viewProfile = [{
    id : 1,
    email: "testuser@gmail.com",
    firstName: "Test",
    lastName: "User"

  }]
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
