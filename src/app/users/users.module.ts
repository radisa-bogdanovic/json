import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { UserComponent } from '../user/user.component';

@NgModule({
  imports: [CommonModule, UsersRoutingModule, FormsModule],
  declarations: [UsersComponent, UserComponent],
})
export class UsersModule {}
