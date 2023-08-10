import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Task } from './models/Task';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  currentUser: String = '64d37019b0f79eecda36fbde'
  authorized: boolean = false;
  tasks: Task[] = [];
  constructor(private readonly http: HttpClient) { }

  async getAllTasks(): Promise<Task[]> {
    const response = await firstValueFrom(
      this.http.get<Task[]>(`http://localhost:8080/tasks/${this.currentUser}`)
    );
    console.log(response);
    return response;
  }
  
  async returnTasks() {
    this.tasks = await this.getAllTasks();
    return this.tasks;
  }

  async updateTask(task: Task){
    const updatedFields = { title: task.title, description: task.description, status: task.status }
    this.http.patch<Task>(`http://localhost:8080/tasks/${task._id}`, task);
    console.log(task);
  }

  authorizeUser(inputPassword: String): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.http.get<string>(`http://localhost:8080/users/authorize/${this.currentUser}/${inputPassword}`)
        .pipe(
          map(emittedString => emittedString === 'accept')
        )
        .subscribe(isAuthorized => {
          this.authorized = isAuthorized;
          console.log(this.authorized);
          resolve(this.authorized);
        }, error => {
          reject(error);
        });
    });
  }

}
