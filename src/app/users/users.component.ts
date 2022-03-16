import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.modul';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor() {}
  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response: User[]) => {
        this.users = response;
        return this.users;
      });
  }
}
