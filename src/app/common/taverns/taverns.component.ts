import { Component, OnInit, OnDestroy } from '@angular/core';
import { TavernService, IRoom } from './taverns.service';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinct, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-taverns.component',
  templateUrl: './taverns.component.html',
})

export class TavernsComponent implements OnInit, OnDestroy {

  searchUpdated = new Subject <string>();
  subscription = new Subscription();

  Id: number;
  rlist: IRoom[];
  tavernName = 'Joe Tavern';
  r: number;
  searchText = '';

  constructor(private tavernService: TavernService,
              private router: Router) {
                this.subscription = this.searchUpdated.pipe(
                  debounceTime(300),
                  distinctUntilChanged(),
                ).subscribe((newValue) => {
                  this.searchRooms(newValue);
                });
             }
  // Depedning on

  search($event): void {
    this.searchUpdated.next($event.taget.value);
  }
  searchRooms(newValue: string) {
    console.log(newValue);
  }

  // ngOnInit(): void {
  //   this.tavernService.getRoomName()
  //   .subscribe((rmlist) => {this.rlist = rmlist;
  //     console.log(this.rlist);
  //   });
  //   }

    ngOnInit(): void {
    this.tavernService.getRoomName('')
    .subscribe((returnedRooms) => {this.rlist = returnedRooms;
      console.log(this.rlist);
    });
    }

    AddRoom(): void {
      this.router.navigateByUrl('/room');
      console.log(this.r);
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
