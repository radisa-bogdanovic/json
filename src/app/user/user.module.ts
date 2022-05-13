import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-router.model';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, UserRoutingModule, FormsModule],
  declarations: [],
})
export class UserModule {}
