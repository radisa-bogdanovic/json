import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../models/Todo-model';
import { TodoService } from './todos-service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  isTrue: boolean = false;
  isTrueEdit: boolean = false;

  addToDoForm = this.fb.group({
    title: ['', Validators.required],
  });

  // editFormTodo = new FormGroup({
  //   title: new FormControl('', Validators.required),
  // });
  constructor(
    private route: ActivatedRoute,
    private services: TodoService,
    private fb: FormBuilder
  ) {}
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
    this.services.getTodo(this.id).subscribe((data: Todo[]) => {
      this.todos = data;
    });
  }
  deleteToDo(i: number) {
    this.services.deleteToDo(i).subscribe((data: Todo[]) => {
      this.getTodosComponent();
    });
  }
  addNewToDo() {
    const newTodo = {
      userId: this.todos[0].userId,
      id: this.todos.length + 1,
      title: this.addToDoForm.value.title,
      completed: false,
    };
    console.log(newTodo);
    this.services.addNewToDoService(newTodo).subscribe((data) => {});
    this.todos = [newTodo, ...this.todos];
    this.addToDoForm.reset();
  }
  openCloseForm() {
    this.isTrue = true;
  }
  closeForm() {
    this.isTrue = false;
    this.addToDoForm.reset();
  }
  editToDo() {
    this.isTrueEdit = true;
  }
  updateTodo(i: number) {
    const updatedTodo = {
      completed: this.todos[i].completed,
      id: this.todos[i].id,
      title: this.addToDoForm.value.title,
      userId: this.todos[i].userId,
    };
    this.services.updateTodo(i, updatedTodo).subscribe((data: Todo) => {});
    this.addToDoForm.reset();
  }
  closeEditForm() {
    this.isTrueEdit = false;
  }
}
