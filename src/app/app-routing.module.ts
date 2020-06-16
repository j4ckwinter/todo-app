import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoFormComponent} from "./todo/todo-form/todo-form.component";
import {TodoComponent} from "./todo/todo.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'currentItems', component: TodoFormComponent },
  { path: 'deletedItems', component: TodoFormComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
