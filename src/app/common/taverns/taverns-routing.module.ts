import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/auth.guard';

import { RoomComponent } from './room/room.component';

// add tavers path

const tavernRoutes: Routes = [
    { path: 'room', component: RoomComponent, canActivate: [AuthGuard] },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(tavernRoutes)],
})
export class TavernsRoutingModule {}
