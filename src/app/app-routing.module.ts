import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const userRoutes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'users/:id/albums/aboutpicture',
    loadChildren: () =>
      import('./about-photo/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'users/:id/albums',
    loadChildren: () =>
      import('./albums/albums-module').then((m) => m.AlbumsModule),
  },
  {
    path: 'users/:id/todos',
    loadChildren: () =>
      import('./todos/todos.module').then((m) => m.TodosModule),
  },
  {
    path: 'users/:id/posts',
    loadChildren: () => import('./posts/post.module').then((m) => m.PostModule),
  },
  {
    path: 'posts/:id/comments',
    loadChildren: () =>
      import('./comments/comments.module').then((m) => m.CommentsModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(userRoutes), BrowserModule],
  exports: [RouterModule],
  providers: [],
})
export class AppRouterModule {}
