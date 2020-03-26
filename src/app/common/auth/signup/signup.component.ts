import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ITavern, LoginService } from '../login/login.service';




@Component({
    templateUrl: './signup.component.html',
    // tslint:disable-next-line: component-selector
    selector: 'my-app',
})
export class SignupComponent implements OnInit {


    constructor(
        private router: Router,
        private loginService: LoginService,
        private authService: AuthService) {}

    userName = '';
    tavernName = '';
    password = '';
    payload = '';
    checkboxchecked = false;
    tlist: ITavern[];
    selected: any;
    Tavern: {};

    ngOnInit(): void {
      this.loginService.getTaverns()
      .subscribe((tavlist) => {this.tlist = tavlist;
          console.log(this.tlist);
      });
    }

    Cancel(): void {
        this.router.navigateByUrl('/login');
    }

    Checkbox(): void {
        this.checkboxchecked = !this.checkboxchecked;
        console.log('Box has been clicked');

    }

    SignUp(): void {

        const payload = {
            UserName: this.userName,
            Password: this.password,
            Tavern: {
                TavernName: this.selected.TavernName,
                Id: this.selected.Id
            },
        };

        console.log(this.Tavern);
        console.log(payload);

        this.authService.signup(payload)
        .subscribe((_create) => {this.router.navigateByUrl('/login'); },
        (error) => {
            console.log(error);
        }

        );
    }

}



