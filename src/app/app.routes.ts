import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {TodoComponent} from "./pages/todo/todo.component";
import {FormComponent} from "./pages/form/form.component";

export const routes: Routes = [
  {path:'home', component:HomeComponent, title:'Home'},
  {path:'todo-list', component:TodoComponent, title:'Todo List'},
  {path:'generation', component:HomeComponent, title:'Home'},
  {path:'pokemon', component:HomeComponent, title:'Home'},
  {path: 'contact', component:FormComponent, title:'Contact'},

];
