import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user-model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user!: User;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {}
  goToAlbums(id: number) {
    this.router.navigate(['/users', id, 'albums']);
  }
  goToToDo(id: number) {
    this.router.navigate(['/users', id, 'todos']);
  }
  goToPosts(id: number) {
    this.router.navigate(['/users', id, 'posts']);
  }
}
