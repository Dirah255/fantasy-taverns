import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IRoom {
    RoomName: string;
    ID: number;
    DailyRate: number;
}

@Injectable({
    providedIn: 'root'
})

export class TavernService {

    constructor(private http: HttpClient) {}

    getRoomName(searchText: string): Observable<IRoom[]> {
        return this.http.get<IRoom[]>(
        'http://localhost:3000/my-tavern?RoomName=${searchText}',
        );
    }

}
