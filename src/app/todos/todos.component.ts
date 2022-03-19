import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { todo } from '../models/todo-modul';
import { Services } from '../services';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: todo[] = [];
  constructor(private route: ActivatedRoute, private services: Services) {}
  id: number = +this.route.snapshot.params['id'];

  ngOnInit(): void {
    this.getTodosComponent();

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      return this.id;
    });
  }
  onCheck(i: number) {
    this.todos[i].completed = !this.todos[i].completed;
  }
  getTodosComponent() {
    this.services.getTodo(this.id).subscribe((data: todo[]) => {
      this.todos = data;
    });
  }
  deleteToDo(i: number) {
    this.services.deleteToDo(i).subscribe((data: todo[]) => {
      this.getTodosComponent();
    });
  }
}
