import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {
  title!: string;
  description!: string;
  @Output() taskAdded = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
      this.taskAdded.emit({
      title: this.title,
      description: this.description,
      hide:true
    });

    this.title = '';
    this.description = '';
  }
}
