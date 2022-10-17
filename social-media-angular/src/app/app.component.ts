import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-media-angular';

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    this.router.navigate(['login']);
  }

  retrieveIsUserLoggedOut(): boolean{
    return this.authService.isLoggedOut;
  }


  profile() {
    this.router.navigate(['profile']);
  }

  DarkToggle() {
    var element = document.body.classList.toggle("darkmode");
    element;
  }
}

