import { Component, OnInit } from '@angular/core';
import { TavernService, IRoom } from './taverns.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-taverns.component',
  templateUrl: './taverns.component.html',
})

export class TavernsComponent implements OnInit {

  constructor(private tavernService: TavernService) { }
  // Depedning on

  TavernName: '';
  Id: number;
  rlist: IRoom[];

  ngOnInit(): void {
    const taken = Token;
    this.tavernService.getRoomName()
    .subscribe((rmlist) => {this.rlist = rmlist;
      console.log(this.rlist);
    });
    }
}
