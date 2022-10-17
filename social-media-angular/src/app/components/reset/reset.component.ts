import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/User';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  reset: User={
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    bio: ""
  }

  resetPassword():void{

    }
  
    userpage():void{
      this.router.navigate(["profile"])

    }

    logout() {
      this.authService.logout();
      this.router.navigate(['login']);
    }

  
}
