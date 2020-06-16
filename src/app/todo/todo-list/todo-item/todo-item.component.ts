import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from "../../todo-item.model";
import {TodoService} from "../../todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Input() todoId: number;

  ngOnInit(): void {
  }

}
