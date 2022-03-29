import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
@NgModule({
  imports: [CommonModule, CommentRoutingModule],
  declarations: [CommentsComponent],
})
export class CommentsModule {}
