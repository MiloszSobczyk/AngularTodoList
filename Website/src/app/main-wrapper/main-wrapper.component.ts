import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent {
  constructor(private readonly taskService: TaskService) {}

  getEditPrompt() {
    return this.taskService.getEditPrompt();
  }

  getCreatePrompt() {
    return this.taskService.getCreatePrompt();
  }

  switchCreatePrompt() {
    this.taskService.switchCreatePrompt();
  }
}
