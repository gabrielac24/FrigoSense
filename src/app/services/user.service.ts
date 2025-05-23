import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResult } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<UserResult>("https://reqres.in/api/users?page=1");
  }
}
