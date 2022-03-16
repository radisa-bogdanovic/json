import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todo: { completed: boolean; id: number; title: string; userId: number }[] =
    [];

  constructor(private route: ActivatedRoute) {}
  id: number = +this.route.snapshot.params['id'];
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      return this.id;
    });

    fetch(`https://jsonplaceholder.typicode.com/users/${this.id}/todos`)
      .then((response) => response.json())
      .then(
        (
          response: {
            userId: number;
            id: number;
            title: string;
            completed: boolean;
          }[]
        ) => {
          this.todo = response;
          console.log(this.todo);
        }
      );
  }
}
