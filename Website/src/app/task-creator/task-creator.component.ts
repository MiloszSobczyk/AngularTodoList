import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../models/Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent {
  taskForm: FormGroup;

  constructor(private readonly taskService: TaskService, private readonly formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      title: [ '', Validators.required],
      description: ['']
    });
  }

  createForm() {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit() {
    this.taskService.switchCreatePrompt();
    if (this.taskForm!.valid) {
      const createdTask = this.taskForm!.value;
      createdTask.status = 'incomplete';
      createdTask.userId = this.taskService.getUserId();
      console.log(createdTask);
      this.taskService.addTask(createdTask!);
    }
  }

  onCancel() {
    this.taskService.switchCreatePrompt();
  }

}
