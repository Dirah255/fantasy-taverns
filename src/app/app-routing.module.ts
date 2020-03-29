import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './common/auth/login/login.component';
import { HomeComponent } from './home.component';
import { AuthGuard } from './common/auth/auth.guard';
import { TavernsComponent } from './common/taverns/taverns.component';
import { SignupComponent } from './common/auth/signup/signup.component';
import { RoomComponent } from './common/taverns/room/room.component';

// add tavers path

const appRoutes: Routes = [
    { path: 'signup', component: SignupComponent, },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'my-tavern', component: TavernsComponent, canActivate: [AuthGuard] },
    // { path: 'room', component: RoomComponent, canActivate: [AuthGuard] },
    { path: '**', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule {}
