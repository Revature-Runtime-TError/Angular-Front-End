import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {


  updatedUser: User={
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
  }
 

  constructor(private authService: AuthService,private router: Router, private edited: ProfileService) { }
  
    ngOnInit(): void {
      this.updatedUser = this.authService.currentUser
    }


    updateUser():void{
      this.edited.updateUser(this.updatedUser).subscribe((response)=>{
        console.log(response)
        this.router.navigate(["profile"])

      });
    }
    userpage():void{
      this.router.navigate(["profile"])

    }
}