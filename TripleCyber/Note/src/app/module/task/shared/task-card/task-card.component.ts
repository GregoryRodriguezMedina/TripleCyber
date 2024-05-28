
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TaskResponse } from 'src/app/models/task.model';
@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
})
export class TaskCardComponent implements OnInit {
  @Input() dataSource: TaskResponse[] = [];
  @Output() onSelected: EventEmitter<TaskResponse> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }
  
   onSelectedHandle(event: TaskResponse){
    this.onSelected.emit(event);
  }
}

