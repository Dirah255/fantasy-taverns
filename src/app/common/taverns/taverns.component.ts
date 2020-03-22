import { Component, OnInit } from '@angular/core';
import { constructor } from 'assert';
import { TavernService } from './taverns.service';

@Component({
  selector: 'app-taverns.component',
  templateUrl: './taverns.component.html',
})

export class TavernsComponent implements OnInit {

  constructor(private tavernService: TavernService) { }
  // Depedning on

  TavernName: 'Joe Place';
  Id: number;

  ngOnInit(): void {
    this.tavernService.getTavernName()
    .subscribe((tavlist) => {this.tlist = tavlist;
        console.log(this.tlist);
    });

}




}
