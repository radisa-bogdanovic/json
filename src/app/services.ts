import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { todo } from './models/todo-modul';
import { User } from './models/user-modul';
import { Post } from './models/post-modul';
import { picture } from './models/picture-modul';
@Injectable({
  providedIn: 'root',
})
export class Services {
  urlLink: string = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlLink);
  }
  getTodo(id: number): Observable<todo[]> {
    return this.http.get<todo[]>(this.urlLink + id + '/todos/');
  }
  getPosts(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(this.urlLink + id + '/posts/');
  }
  getPhoto(id: number): Observable<picture[]> {
    return this.http.get<picture[]>(this.urlLink + id + '/photos/');
  }
}
