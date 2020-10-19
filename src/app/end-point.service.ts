import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user.model';
@Injectable({
  providedIn: 'root',
})
export class EndPointService {
  userData = new Subject<string>();
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://reqres.in/api/users');
  }
}
