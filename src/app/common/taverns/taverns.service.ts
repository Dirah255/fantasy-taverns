import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TavernService {

    constructor(private http: HttpClient) {}

    getTavernName(): Observable<ITavern[]> {
        return this.http.get<ITavern[]>('http://localhost:3000/login');
    }

}