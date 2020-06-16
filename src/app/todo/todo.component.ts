import { Component, OnInit } from '@angular/core';
import {TodoService} from "./todo.service";
import {TodoItem} from "./todo-item.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  selectedTodo: TodoItem;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.todoSelected.subscribe(
      (todo: TodoItem) => {
        this.selectedTodo = todo;
      }
    )
  }

}
