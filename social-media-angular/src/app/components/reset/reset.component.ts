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
  }

  resetForm = new FormGroup({
    email: new FormControl(this.user.email),
    password: new FormControl(this.user.password)
  })

  constructor(private router: Router, private resetService: ResetService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  // Reset password functionality
  onSubmit(e: any): void {
    e.preventDefault()

    //Searches for user by email so their existing password is identifies
    this.resetService.findByEmail(this.resetForm.value.email!).subscribe((response) => {
      this.user = response;
      console.log(this.user)

      this.resetService.resetPassword(this.user).subscribe((response) => {
        this.router.navigate(["login"])
      });
    })

  }

  cancel() {
    this.router.navigate(['login']);
  }

  login() {
    this.router.navigate(['login']);
  }

  retrieveIsUserLoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }

  retrieveIsUserLoggedOut(): boolean{
    return this.authService.isLoggedOut;
  }

  DarkToggle() {
    var element = document.body.classList.toggle("darkmode");
    element;
  }


}
