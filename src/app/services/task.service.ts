import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasks: Array<Task>|undefined

private tasks: Array<Task> | undefined = [
  {title: 'Task 1'},
  {title: 'Task 2'},

]
  getTasks(): Array<Task> | undefined {
    return this._tasks;
  }
}
