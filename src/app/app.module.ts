import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-list/todo-item/todo-item.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoDetailComponent,
    TodoComponent,
    TodoFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
