import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from '../models/Post-model';
import { PostService } from './post-service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  isTrue: boolean = false;
  isTrueEdit: boolean = false;
  addPostForm = this.fb.group({
    body: ['', Validators.required],
    title: ['', Validators.required],
  });
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private services: PostService,
    private fb: FormBuilder
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
      title: this.addPostForm.value.title,
      body: this.addPostForm.value.body,
    };
    console.log(newPost);
    this.services.addNewPostService(newPost).subscribe((data) => {});
    this.posts = [newPost, ...this.posts];
    this.addPostForm.reset();
  }
  openCloseForm() {
    this.isTrue = true;
  }
  closeForm() {
    this.isTrue = false;
    this.addPostForm.reset();
  }
  editToDo() {
    this.isTrueEdit = true;
  }
  updatePost(i: number) {
    const updatedPost = {
      userId: this.posts[0].userId,
      id: this.posts.length + 1,
      title: this.addPostForm.value.title,
      body: this.addPostForm.value.body,
    };
    this.services.updatePost(i, updatedPost).subscribe((data: Post) => {
      this.posts = this.posts.map(
        (post: Post): Post => (post.id === data.id ? data : post)
      );
    });
    this.addPostForm.reset();
  }
  closeEditForm() {
    this.isTrueEdit = false;
  }
}
