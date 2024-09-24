import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./pages/header/header.component";
import {TodoComponent} from "./pages/todo/todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Coucou BG !';
  isAdmin: boolean = true;
  courseList: Array<String>=[
    'pain', 'chocolat', 'beurre de cacahuète'
  ]

  pathImage: String = "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  count: number = 0
  addOne(){
    this.count++;
  }
}
