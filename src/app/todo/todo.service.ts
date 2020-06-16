import {EventEmitter, Injectable} from '@angular/core';
import {TodoItem} from "./todo-item.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoSelected = new EventEmitter<TodoItem>();
  private todoItems: TodoItem[] = [
    new TodoItem(1, "Reply to HR", "Reply to HR email about benefits", 0.5, 1, "Admin", "11/06/2020", "12/06/2020", 3),
    new TodoItem(2, "Do HR training", "Finish HR assigned training course", 1, 1, "Training", "10/06/2020", "15/06/2020", 3),
    new TodoItem(3, "Keystore password encryption", "Investigate a way to encrypt the keystore password", 5, 1, "Development", "23/04/2020", "09/08/2020", 4)

  ];

  constructor() { }

  getTodoItems() {
    return this.todoItems.slice();
  }
}