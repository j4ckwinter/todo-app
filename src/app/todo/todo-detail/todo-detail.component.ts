import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from "../todo-item.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo: TodoItem;
  id: number;

  constructor(private todoService: TodoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.todo = this.todoService.getTodoItem(this.id);
      }
    )
  }

  onTodoEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
