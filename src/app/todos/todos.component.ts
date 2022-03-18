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
  doneOr!: string;
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
    this.doneOr = this.todos[i].completed ? 'done' : 'not done yet';
  }
  getTodosComponent() {
    this.services.getTodo(this.id).subscribe((data: todo[]) => {
      this.todos = data;
    });
  }
}
