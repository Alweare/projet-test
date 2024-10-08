import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./pages/header/header.component";
import {TodoComponent} from "./pages/todo/todo.component";
import {TaskService} from "./services/task.service";
import {Task} from "./interfaces/task";
import {JsonPipe} from "@angular/common";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TodoComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Coucou BG !';
  isAdmin: boolean = true;
  courseList: Array<String>=[
    'pain', 'chocolat', 'beurre de cacahuète'
  ]
  pathImage: String = "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  count: number = 0
  protected tasks: Array<Task> | undefined;
  product: any;

  addOne(){
    this.count++;
  }
  //Injection de service

  //Par propriété
  //  private taskService: TaskService = inject(TaskService)


  //par constructor
  constructor(taskService: TaskService, productService:ProductsService) {
     this.tasks = taskService.getTasks();
     this.product = productService.fetchProducts() ;

  }

  ngOnInit(): void {
    this.product.subscribe({
      next: (data: any)=> {
        this.product = data;
      },
      error: (error:any)=> {
        console.log(error);
      }
    })


  }






}
