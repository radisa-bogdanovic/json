import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: { userId: number; id: number; title: string; body: string }[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}
  id: number = +this.route.snapshot.params['id'];
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      return this.id;
    });

    fetch(`https://jsonplaceholder.typicode.com/users/${this.id}/posts`)
      .then((response) => response.json())
      .then((response) => {
        this.posts = response;
      });
  }
}
