import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getAllTasks() {
    const path = `${this.api}/photos`;
    return this.http.get<Task[]>(path);
  }
}
