import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent {
    userName = '';
    password = '';
    showSignUp = false;
    payload = '';
    tavern = '';
    name = 'Angular 5';

    constructor(private router: Router, private authService: AuthService) {}

    login(): void {
        this.authService.login(this.userName, this.password).subscribe(
            (response) => {
                if (response.success) {
                    console.log('successful login');
                    this.router.navigateByUrl('/home');
                }
            },
            (error) => {
                console.log('username/password incorrect');
            },
        );
        const Taverns = [{
            Id: 1,
            Name: 'Johns Tavern'
          },
          {
            Id: 1,
            Name: 'Moes Tavern'
          },
          {
           Id: 1,
            Name: 'Kates Tavern'
          }];
    }

    toggleSignUp(): void {
        this.showSignUp = !this.showSignUp;
        this.userName = '';
        this.password = '';
        this.tavern
    }

    SignUp(): void {
        const payload = {username: this.userName, password: this.password };
        console.log(payload);
    }
}

