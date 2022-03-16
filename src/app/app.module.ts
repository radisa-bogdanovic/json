import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TodosComponent } from './todos/todos.component';
import { PostsComponent } from './posts/posts.component';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { UsersComponent } from './users/users.component';
import { AboutPhotoComponent } from './about-photo/about-photo.component';
import { FormsModule } from '@angular/forms';

const userRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/:id/albums/aboutpicture',
    component: AboutPhotoComponent,
  },
  { path: 'users/:id/albums', component: AlbumsComponent },
  { path: 'users/:id/todos', component: TodosComponent },
  { path: 'users/:id/posts', component: PostsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AlbumsComponent,
    UsersComponent,
    AboutPhotoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(userRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
