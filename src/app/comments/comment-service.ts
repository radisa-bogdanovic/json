import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Comment } from '../models/comment-model';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  urlLink: string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}
  getComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      this.urlLink + '/posts/' + id + '/comments/'
    );
  }
}
