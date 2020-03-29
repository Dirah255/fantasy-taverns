import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { IRoom } from '../taverns.service';
import { RoomService } from './rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
})
export class RoomComponent implements OnInit {

  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit() {
  }

  SaveRoom(form: NgForm): void {
    if (form.valid) {
      const room: IRoom = form.value;
      room.ID = 0;
       this.roomService.SaveRoom(room).subscribe((_room: IRoom[]) => {
         this.router.navigateByUrl('/my-tavern');
       });
     }
    console.log(form);
  }
}
