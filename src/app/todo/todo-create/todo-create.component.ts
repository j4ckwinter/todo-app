import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {TodoItem} from "../todo-item.model";
import {TodoService} from "../todo.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  form: FormGroup;
  id: string;
  editMode: boolean;
  existingTodo: TodoItem;

  constructor(private route: ActivatedRoute,
              private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = this.id != null;
        this.initForm();
      }
    )
  }

  private initForm() {
    let id = '';
    let title = '';
    let description = '';
    let priority = null;
    let category = '';
    let dateCreated = new Date().toLocaleString();

    if (this.editMode) {
      const todo: TodoItem = this.todoService.getTodoItem(this.id);
      id = todo.id;
      title = todo.title;
      description = todo.description;
      priority = todo.priority;
      category = todo.category;
      dateCreated = todo.dateCreated;
    } else {
      id = this.todoService.generateId();
    }

    this.form = new FormGroup({
      'id': new FormControl(id, Validators.required),
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'priority': new FormControl(priority, Validators.required),
      'category': new FormControl(category, Validators.required),
      'dateCreated': new FormControl(dateCreated, Validators.required),
    })

  }

  onSubmit() {
    if (this.form.valid) {
      if (this.editMode) {
        this.todoService.updateTodoItem(this.form.value);
      } else {
        this.todoService.addTodoItem(this.form.value);
      }
    }
  }
}

