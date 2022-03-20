import { Component, OnInit } from '@angular/core';
import { Comment } from '../models';
import { ActivatedRoute, Params } from '@angular/router';
import { Services } from '../services';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];
  id = this.route.snapshot.params['id'];
  constructor(private route: ActivatedRoute, private service: Services) {}

  ngOnInit(): void {
    this.loadComments();
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }
  loadComments() {
    this.service.getComments(this.id).subscribe((data: Comment[]) => {
      this.comments = data;
    });
  }
}
