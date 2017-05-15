import { Component, OnInit } from '@angular/core';
import { CrudLocalstorageService } from './services/crud-localstorage.service';

import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Week Plan';
  tasks: Task[];
  constructor(private crud: CrudLocalstorageService){

  }

  ngOnInit(){
    this.tasks = this.crud.getTasks();
    console.log('App component', this.tasks)
  }
}