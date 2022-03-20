import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { todo, Post, User, picture, Comment } from './models';

@Injectable({
  providedIn: 'root',
})
export class Services {
  httpOptions = {
    headers: new HttpHeaders({
      authority: 'jsonplaceholder.typicode.com',
      method: 'DELETE',
    }),
  };
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
  deletePost(i: number): Observable<Post> {
    return this.http.delete<Post>(
      `${this.urlLink}/posts/${i}`,
      this.httpOptions
    );
  }
  addNewPostService(post: Post): Observable<Post> {
    return this.http.post<Post>(
      this.urlLink + '/posts/',
      JSON.stringify(post),
      this.httpOptions
    );
  }
  updatePost(i: number, post: Post): Observable<Post> {
    return this.http.put<Post>(
      this.urlLink + '/posts/' + i,
      JSON.stringify(post),
      this.httpOptions
    );
  }
  deleteToDo(i: number): Observable<todo[]> {
    return this.http.delete<todo[]>(
      this.urlLink + '/todos/' + i,
      this.httpOptions
    );
  }
  addNewToDoService(todo: todo): Observable<todo> {
    return this.http.post<todo>(
      this.urlLink + '/todos/',
      JSON.stringify(todo),
      this.httpOptions
    );
  }
  updateTodo(i: number, todo: todo): Observable<todo> {
    return this.http.put<todo>(
      this.urlLink + '/todos/' + i,
      JSON.stringify(todo),
      this.httpOptions
    );
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
