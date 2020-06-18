import {Injectable} from '@angular/core';
import {TodoItem} from "./todo-item.model";
import {Subject} from "rxjs";
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  newItem: TodoItem;
  todoItemsChanged: Subject<TodoItem[]> = new Subject<TodoItem[]>();
  private todoItems: TodoItem[] = [
    new TodoItem(this.generateId(), "Reply to HR", "Reply to HR email about benefits", "Admin", 3, '02/01/2020, 15:02:01'),
    new TodoItem(this.generateId(), "Do HR training", "Finish HR assigned training course", "Training", 3, '22/04/2020, 22:57:21'),
    new TodoItem(this.generateId(), "Keystore password encryption", "Investigate a way to encrypt the keystore password", "Development", 4, '07/05/2020, 08:22:56')
  ];

  constructor() {
  }

  getTodoItem(id: string) {
    return this.todoItems.filter(x => x.id == id)[0];
  }

  getTodoItems() {
    return this.todoItems.slice();
  }

  resolveTodoItem(item: TodoItem) {
    let index: number;
    index = this.todoItems.indexOf(this.getTodoItem(item.id));
    this.todoItems.splice(index, 1);
    this.todoItemsChanged.next(this.todoItems.slice());
  }

  addTodoItem(item: TodoItem) {
    let newItem: TodoItem;
    newItem = new TodoItem(this.generateId(), item.title, item.description, item.category, item.priority, item.dateCreated);
    this.todoItems.push(newItem);
    this.todoItemsChanged.next(this.todoItems.slice());
  }

  updateTodoItem(item: TodoItem) {
    let index: number;
    index = this.todoItems.indexOf(this.getTodoItem(item.id));
    this.todoItems[index] = item;
    this.todoItemsChanged.next(this.todoItems.slice());
  }

  generateId() {
    return uuid.v4();
  }
}
