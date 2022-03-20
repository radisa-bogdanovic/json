import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { todo } from '../models';
import { Services } from '../services';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: todo[] = [];
  isTrue: boolean = false;
  isTrueEdit: boolean = false;
  addTodo = new FormGroup({
    title: new FormControl('', Validators.required),
  });
  editFormTodo = new FormGroup({
    title: new FormControl('', Validators.required),
  });

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
  addNewToDo() {
    const newTodo = {
      userId: this.todos[0].userId,
      id: this.todos.length + 1,
      title: this.addTodo.value.title,
      completed: false,
    };
    console.log(newTodo);
    this.services.addNewToDoService(newTodo).subscribe((data) => {});
    // this.posts = [newPost, ...this.posts];
    this.addTodo.reset();
  }
  openCloseForm() {
    this.isTrue = true;
  }
  closeForm() {
    this.isTrue = false;
  }
  editToDo() {
    this.isTrueEdit = true;
  }
  updateTodo(i: number) {
    const updatedTodo = {
      completed: this.todos[i].completed,
      id: this.todos[i].id,
      title: this.editFormTodo.value.title,
      userId: this.todos[i].userId,
    };
    this.services.updateTodo(i, updatedTodo).subscribe((data: todo) => {});
    this.editFormTodo.reset();
  }
  closeEditForm() {
    this.isTrueEdit = false;
  }
}
