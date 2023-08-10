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
  chosenTask: Task | null = null;
  editPrompt: boolean = false;
  createPrompt: boolean = false;

  switchEditPrompt() {
    this.editPrompt = !this.editPrompt;
  }

  getEditPrompt() {
    return this.editPrompt;
  }

  switchCreatePrompt() {
    this.createPrompt = !this.createPrompt;
  }

  getCreatePrompt() {
    return this.createPrompt;
  }
  
  getUserId() {
    return this.currentUser;
  }

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

  async updateTask(task: Task) {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(task);
    this.http.patch<Task>(`http://localhost:8080/tasks/${task._id}`, body, { 'headers': headers }).subscribe();
    console.log(task);
  }

  async addTask(task: Task) {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(task);
    this.http.post<Task>(`http://localhost:8080/tasks`, body, { 'headers': headers }).subscribe();
    this.tasks.push(task);
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

  setChosenTask(task: Task | null) {
    this.chosenTask = task;
  }

}
