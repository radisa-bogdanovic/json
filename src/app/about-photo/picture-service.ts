import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Picture } from '../models/picture-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  urlLink: string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getPhoto(id: number): Observable<Picture[]> {
    return this.http.get<Picture[]>(this.urlLink + '/users/' + id + '/photos/');
  }
}
