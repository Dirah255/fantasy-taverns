import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService, ITavern } from './login.service';


@Component({
    templateUrl: './login.component.html',
    // tslint:disable-next-line: component-selector
    selector: 'my-app',
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private authService: AuthService,
        private loginService: LoginService) {}

    userName = '';
    password = '';
    tavernName = '';
    showSignUp = false;
    payload = '';
    checkboxchecked = false;
    tlist: ITavern[];
    selected: any;
    Tavern: [];

    login(): void {
        this.authService.login(this.userName, this.password).subscribe(
            (response) => {
                if (response.success) {
                    console.log('successful login');
                    this.router.navigateByUrl('/home');
                }
            },
            (_error) => {
                console.log('username/password incorrect');
            },
        );
    }


    toggleSignUp(): void {
        this.showSignUp = !this.showSignUp;
        this.userName = '';
        this.password = '';
    }

    Checkbox(): void {
        this.checkboxchecked = !this.checkboxchecked;
        console.log('Box has been clicked');

    }

    ngOnInit(): void {
        this.loginService.getTaverns()
        .subscribe((tavlist) => {this.tlist = tavlist;
            console.log(this.tlist);
        });

    }

    SignUp(): void {

        const payload = {
            UserName: this.userName,
            Password: this.password,
            Tavern: [
                {TavernName: this.selected,
                Id: 2}
            ]
        };

        console.log(payload);

        this.authService.signup(payload)
        .subscribe((_create) => {this.router.navigateByUrl('/login'); }

        );
    }

}


