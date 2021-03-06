import { Injectable } from '@angular/core';
import { Task } from '../task';

@Injectable()
export class CrudLocalstorageService {

  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'hksz  siljc sjhxs jhhg',
      creationDate: new Date,
      isDeleted: false
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'hksz  siljc sjhxs jhhg',
      creationDate: new Date,
      isDeleted: false
    }
  ];

  constructor() { }

  getTasks(){
      /*this.tasks = JSON.parse(localStorage.getItem('tasks'));
      if(! this.tasks){
        this.tasks = [];
      }*/
      return this.tasks;
  }

  createTask(task: Task){
    this.tasks = this.getTasks();
    let id = 1;
    if(this.tasks && this.tasks.length > 0){
      id = this.tasks.length ++;
    }
    task.id = id;
  }

}
