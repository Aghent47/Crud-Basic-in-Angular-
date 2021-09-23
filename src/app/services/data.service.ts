import { Injectable } from '@angular/core';

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  removeTask(tasks: Task) {
    throw new Error('Method not implemented.');
  }
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  getTask(): Task[] {
    const localTasks = localStorage.getItem('tasks');

    if (localTasks !== null) {
      this.tasks = JSON.parse(localTasks);
    }

    return this.tasks;
  }

  addTask(task: Task): void {
    const localTasks = localStorage.getItem('tasks');

    this.tasks.unshift(task);
    let tasks;
    if (localTasks !== null) {
      tasks = JSON.parse(localTasks);
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks = [];
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  deleteTask(task: Task) {
    for (let i = 0; this.tasks.length; i++) {
      if (task == this.tasks[i]) {
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }
}
