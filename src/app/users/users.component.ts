import { Component, OnInit } from '@angular/core';
import { User } from '../models/User-model';
import { UsersService } from './users-service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private services: UsersService) {}
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.services.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
}
