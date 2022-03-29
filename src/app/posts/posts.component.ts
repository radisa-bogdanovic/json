import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from '../models/post-model';
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
  postForm = this.fb.group({
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
      return this.services.getPosts(params['id']);
    });
  }
  getPosts() {
    this.services.getPosts(this.id).subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
  goToComments(id: number) {
    this.router.navigate(['/posts', id, 'comments'], {});
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
      title: this.postForm.value.title,
      body: this.postForm.value.body,
    };
    console.log(newPost);
    this.services.addNewPostService(newPost).subscribe((data) => {});
    this.posts = [newPost, ...this.posts];
    this.postForm.reset();
  }
  openCloseForm() {
    this.isTrue = true;
  }
  closeForm() {
    this.isTrue = false;
    this.postForm.reset();
  }
  editToDo() {
    this.isTrueEdit = true;
  }
  updatePost(i: number) {
    const updatedPost = {
      userId: this.posts[0].userId,
      id: this.posts.length + 1,
      title: this.postForm.value.title,
      body: this.postForm.value.body,
    };
    this.services.updatePost(i, updatedPost).subscribe((data: Post) => {
      this.posts = this.posts.map(
        (post: Post): Post => (post.id === data.id ? data : post)
      );
    });
    this.postForm.reset();
  }
  closeEditForm() {
    this.isTrueEdit = false;
  }
}
