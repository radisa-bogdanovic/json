import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User-model';
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
    this.router.navigate(['/users', id, 'albums'], { relativeTo: this.route });
  }
  goToToDo(id: number) {
    this.router.navigate(['/users', id, 'todos'], { relativeTo: this.route });
  }
  goToPosts(id: number) {
    this.router.navigate(['/users', id, 'posts'], { relativeTo: this.route });
  }
}
