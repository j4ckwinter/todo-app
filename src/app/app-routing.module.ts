import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoFormComponent} from "./todo/todo-form/todo-form.component";
import {TodoComponent} from "./todo/todo.component";

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'currentItems', component: TodoFormComponent },
  { path: 'deletedItems', component: TodoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
