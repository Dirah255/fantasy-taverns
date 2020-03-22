import { Component, OnInit } from '@angular/core';
import { constructor } from 'assert';
import { TavernService, IRoom } from './taverns.service';

@Component({
  selector: 'app-taverns.component',
  templateUrl: './taverns.component.html',
})

export class TavernsComponent implements OnInit {

  constructor(private tavernService: TavernService) { }
  // Depedning on

  TavernName: 'Joe Place';
  Id: number;
  rlist: IRoom[];

  ngOnInit(): void {
    this.tavernService.getRoomName()
    .subscribe((roomlist) => {this.rlist = roomlist;
        console.log(this.rlist);
    });

}




}
