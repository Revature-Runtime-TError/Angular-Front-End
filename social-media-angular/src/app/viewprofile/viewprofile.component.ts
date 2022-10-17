import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import User from 'src/app/models/User';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import UserInput from 'src/app/models/UserInput';


@Component({
  selector: 'viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  
  user: User = {} as User;

  UserInputObject: UserInput = {
    firstname: "",
    lastname: ""
  }
  JSONuser: any;



  constructor(private authService: AuthService,private router: Router, private ProfileService: ProfileService) { }

  ngOnInit(): void {
    this.JSONuser = sessionStorage.getItem("searchedUser")!;
      this.user = JSON.parse(this.JSONuser);
   
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

   

