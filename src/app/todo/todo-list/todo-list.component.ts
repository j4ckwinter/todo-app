import {Component, OnInit} from '@angular/core';
import {TodoItem} from "../todo-item.model";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItems: TodoItem[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.todoItemsChanged
      .subscribe((todoItems: TodoItem[]) => {
          this.todoItems = todoItems;
        }
      );
    this.todoItems = this.todoService.getTodoItems();
  }
}
