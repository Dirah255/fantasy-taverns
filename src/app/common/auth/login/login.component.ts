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
    tlistreturned: any;

    constructor(
        private router: Router,
        private authService: AuthService,
        private loginService: LoginService) {}

    userName = '';
    password = '';
    showSignUp = false;
    payload = '';
    tavern = '';
    checkboxchecked = false;
    tlist: ITavern[];

      selected: any ;

        // // tslint:disable-next-line: member-ordering
        // name = 'Angular 5';
        // // tslint:disable-next-line: member-ordering
         // Taverns = [{
          // Id: 1,
          // Name: 'John\'s Tavern'
        // },
        // {
          // Id: 1,
          // Name: 'Moe\'s Tavern'
        // },
        // {
        // Id: 1,
          // Name: 'Kate\'s Tavern'
       // }];

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

    SignUp(): void {
        const payload = {username: this.userName, password: this.password, tavern: this.tavern};
        console.log(payload);
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

    // this.tlist = tlistreturned

}


