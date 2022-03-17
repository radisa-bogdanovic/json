import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Post } from '../models/post-modul';
import { Services } from '../services';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private services: Services
  ) {}
  id: number = +this.route.snapshot.params['id'];
  ngOnInit(): void {
    this.getPosts();
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      return this.id;
    });
  }
  getPosts() {
    this.services.getPosts(this.id).subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
}
