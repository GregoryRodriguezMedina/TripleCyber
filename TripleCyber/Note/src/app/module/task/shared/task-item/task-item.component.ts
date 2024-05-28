
import { Component, OnInit, Input } from '@angular/core';
import { TaskResponse } from 'src/app/models/task.model';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent implements OnInit {
  @Input() dataSource: TaskResponse = new TaskResponse;  
  constructor() {
  }
  ngOnInit(): void {
  }  
}
