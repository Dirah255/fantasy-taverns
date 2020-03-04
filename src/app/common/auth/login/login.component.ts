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
    }


    toggleSignUp(): void {
        this.showSignUp = !this.showSignUp;
        this.userName = ''
        this.password = ''
    }

    SignUp(): void {
        const payload = {username: this.userName, password: this.password }      
        console.log(payload)
    }
}

