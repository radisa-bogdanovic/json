import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/Post-model';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  httpOptions = {
    headers: new HttpHeaders({
      authority: 'jsonplaceholder.typicode.com',
      method: 'DELETE',
    }),
  };
  urlLink: string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}
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
}
