import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/Task';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent {
  @Input() task: Task | null = null;
  taskForm: FormGroup;

  constructor(private readonly taskService: TaskService, private readonly formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      title: [ '', Validators.required],
      description: ['']
    });
    this.taskForm.patchValue( { title: this.taskService.chosenTask!.title, description: this.taskService.chosenTask!.description  });
  }

  createForm() {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit() {
    this.taskService.switchEditPrompt();
    if (this.taskForm!.valid) {
      const editedTask = this.taskForm!.value;
      console.log(editedTask);
      this.taskService.chosenTask!.title = editedTask.title;
      this.taskService.chosenTask!.description = editedTask.description;
      this.taskService.updateTask(this.taskService.chosenTask!);
    }
  }
  onCancel() {
    this.taskService.switchEditPrompt();
  }

}
