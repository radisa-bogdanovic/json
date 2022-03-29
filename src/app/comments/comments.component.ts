import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from './comment-service';
import { Comment } from '../models/comment-model';
import { Params } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];
  id = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute, private service: CommentService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      return this.service.getComments(params['id']);
    });

    this.loadComments();
  }
  loadComments() {
    this.service.getComments(this.id).subscribe((data: Comment[]) => {
      this.comments = data;
    });
  }
}
