import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../models/task';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input('task')
  task!: Task;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
