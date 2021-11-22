import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-ultimos',
  templateUrl: './ultimos.page.html',
  styleUrls: ['./ultimos.page.scss'],
})
export class UltimosPage implements OnInit {
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
