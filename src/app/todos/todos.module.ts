import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [TodosComponent],
})
export class TodosModule {}
