import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo-model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  httpOptions = {
    headers: new HttpHeaders({
      authority: 'jsonplaceholder.typicode.com',
      method: '',
    }),
  };
  urlLink: string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}
  getTodo(id: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.urlLink + '/users/' + id + '/todos/');
  }
  deleteToDo(i: number): Observable<Todo[]> {
    return this.http.delete<Todo[]>(
      this.urlLink + '/todos/' + i,
      this.httpOptions
    );
  }
  updateTodo(i: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      this.urlLink + '/todos/' + i,
      JSON.stringify(todo),
      this.httpOptions
    );
  }

  addNewToDoService(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(
      this.urlLink + '/todos/',
      JSON.stringify(todo),
      this.httpOptions
    );
  }
}
