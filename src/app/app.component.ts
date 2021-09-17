import { Component } from '@angular/core';
import {DataService} from './services/data.service';
import {Task} from './models/task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-app';

  constructor( public dataService: DataService ) { }

  addTask(task: Task){
    this.dataService.addTask(task)
  }


}
