import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/User';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ResetService } from 'src/app/services/reset.service';


@Component({
  selector: 'reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  user: User = {
    id: 0,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    bio: ""
  }

  updateUser: User = {
    id: 0,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    bio: ""
  }


  resetForm = new FormGroup({
    email: new FormControl(this.user.email),
    password: new FormControl(this.user.password),
    confirmPassword: new FormControl()

  })

  constructor(private router: Router, private resetService: ResetService, private authService: AuthService) { }
  message: string = "";

  ngOnInit(): void {

  }
  content : string = "Hello World";

  // Reset password functionality
  onSubmit(e: any): void {
    e.preventDefault()


    if (this.resetForm.value.password == this.resetForm.value.confirmPassword) {
      //Searches for user by email so their existing password is identifies
      this.resetService.findByEmail(this.resetForm.value.email!).subscribe((response) => {
        this.updateUser = response;
        if (response != null) {
          //Overwriting password in textbox
          this.updateUser.password = this.resetForm.value.password!
          //Resets password for user found after search
          this.resetService.resetPassword(this.updateUser).subscribe((res) => {
            this.router.navigate(["login"])
          });
        }else{
          this.message = "User does not exist!";
        }
      })
    }

  }

  cancel() {
    this.router.navigate(['login']);
  }

  login() {
    this.router.navigate(['login']);
  }

  retrieveIsUserLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  retrieveIsUserLoggedOut(): boolean {
    return this.authService.isLoggedOut;
  }

  DarkToggle() {
    var element = document.body.classList.toggle("darkmode");
    element;
  }


}
