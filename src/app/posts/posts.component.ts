import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Post } from '../models';
import { Services } from '../services';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  isTrue: boolean = false;
  isTrueEdit: boolean = false;
  addPost = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });
  editPost = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

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
  goToComments(id: number) {
    this.router.navigate(['/posts', id, 'comments'], {
      relativeTo: this.route,
    });
  }
  toDeletePost(i: number) {
    this.services.deletePost(i).subscribe((data: Post) => {
      this.getPosts();
    });
  }
  addNewPost() {
    const newPost = {
      userId: this.posts[0].userId,
      id: this.posts.length + 1,
      title: this.addPost.value.title,
      body: this.addPost.value.body,
    };
    console.log(newPost);
    this.services.addNewPostService(newPost).subscribe((data) => {});
    // this.posts = [newPost, ...this.posts];
    this.addPost.reset();
  }
  openCloseForm() {
    this.isTrue = true;
  }
  closeForm() {
    this.isTrue = false;
  }
  editToDo() {
    this.isTrueEdit = true;
  }
  updatePost(i: number) {
    const updatedPost = {
      userId: this.posts[0].userId,
      id: this.posts.length + 1,
      title: this.addPost.value.title,
      body: this.addPost.value.body,
    };
    this.services.updatePost(i, updatedPost).subscribe((data: Post) => {});
    this.editPost.reset();
  }
  closeEditForm() {
    this.isTrueEdit = false;
  }
}
