import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-primeros',
  templateUrl: './primeros.page.html',
  styleUrls: ['./primeros.page.scss'],
})
export class PrimerosPage implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getAllTasks()
      .subscribe(tasks => {
        console.log(tasks);
        this.tasks = tasks;
      });
  }

}
