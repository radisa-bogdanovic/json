import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { Services } from '../services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private services: Services) {}
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.services.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
}
