import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/Task';
import {Router } from '@angular/router';

@Component({
  	selector: 'app-task',
  	templateUrl: './task.component.html',
  	styleUrls: ['./task.component.css']
})
export class TaskComponent {
	@Input() task: Task = { _id: '', userId:'', title: '', description: '', status: '', _v: 0};
	constructor(private readonly taskService: TaskService, private readonly router: Router) { }

	moveTask(location: String): void {
		this.task.status = location;
		this.taskService.updateTask(this.task);
	}

	editTask(): void {
		this.taskService.setChosenTask(this.task);
		this.taskService.switchEditPrompt();
	}

	deleteTask(): void {
		this.taskService.deleteTask(this.task);
	}
}
