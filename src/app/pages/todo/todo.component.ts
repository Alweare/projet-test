// @ts-ignore

import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";


class Task {
  id: number | undefined;
  task: string | undefined;
  done: boolean | undefined;
  checked: boolean | undefined;

}


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})


export class TodoComponent {
  taskToAdd: string = ''
  tasks: Array<Task> = [
    {id: 1, task: 'Acceuil', done: false, checked: false},
    {id: 2, task: 'Faire la vaisselle', done: false, checked: false},
    {id: 3, task: 'Faire la vaisselle', done: false, checked: false},
    {id: 4, task: 'Faire la vaisselle', done: false, checked: false},

  ]

  isDone(task: any): void {
    task.done = !task.done;
    task.checked = task.done;

  }

  newTask(): void {
    let task = new Task()
    task.id = this.tasks.length + 1
    task.task = this.taskToAdd.trim()
    task.done = false;
    task.checked = false;

    this.tasks.push(task)
    this.taskToAdd = ""


  }

  removeTask(task: any): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  //Méthode

  // getTaskDone(): Array<Task>| null{
  //   // @ts-ignore
  //   return this.tasks.filter((task)=> task.done)
  // }


  protected readonly onsubmit = onsubmit;
  protected readonly Task = Task;
}
