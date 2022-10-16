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

  UserInputObject: UserInput = {
    firstname: "",
    lastname: ""
  }



  constructor(private authService: AuthService,private router: Router, private validated: ProfileService ) { }

  ngOnInit(): void {
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
   validate() {
     this.validated.findUser(this.UserInputObject).subscribe((response)=>{
      console.log(response);

      
});
   }
}
