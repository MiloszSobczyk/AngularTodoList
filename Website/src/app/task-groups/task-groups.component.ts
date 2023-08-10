import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/Task';
import {  } from '@angular/animations';

@Component({
  selector: 'app-task-groups',
  templateUrl: './task-groups.component.html',
  styleUrls: ['./task-groups.component.css']
})
export class TaskGroupsComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private readonly taskService: TaskService) { }

  async ngOnInit() {
    this.tasks = await this.taskService.returnTasks();
  }

  onClick(completion: String) {
    this.taskService.switchCreatePrompt();
  }
}
