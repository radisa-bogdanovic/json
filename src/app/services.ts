import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { todo } from './models/todo-modul';
import { User } from './models/user-modul';
import { Post } from './models/post-modul';
import { picture } from './models/picture-modul';
import { Comment } from './models/comment-modul';
@Injectable({
  providedIn: 'root',
})
export class Services {
  urlLink: string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlLink + '/users/');
  }
  getTodo(id: number): Observable<todo[]> {
    return this.http.get<todo[]>(this.urlLink + '/users/' + id + '/todos/');
  }
  getPosts(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(this.urlLink + '/users/' + id + '/posts/');
  }
  getPhoto(id: number): Observable<picture[]> {
    return this.http.get<picture[]>(this.urlLink + '/users/' + id + '/photos/');
  }
  getComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      this.urlLink + '/posts/' + id + '/comments/'
    );
  }
}
