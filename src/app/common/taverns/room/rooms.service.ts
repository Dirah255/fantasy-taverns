import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRoom } from '../taverns.service';

@Injectable({
    providedIn: 'root'
})

export class RoomService {

    constructor(private http: HttpClient) {}

     SaveRoom(room: IRoom): Observable<IRoom[]> {
         return this.http.post<IRoom[]>('http://localhost:3000/room', room);
     }
}
