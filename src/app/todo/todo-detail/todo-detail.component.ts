import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from "../todo-item.model";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input() todo: TodoItem;

  constructor() { }

  ngOnInit(): void {
  }

}
