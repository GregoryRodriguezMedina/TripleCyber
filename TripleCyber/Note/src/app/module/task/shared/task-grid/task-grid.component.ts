
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TaskResponse } from 'src/app/models/task.model';
@Component({
  selector: 'app-task-grid',
  templateUrl: './task-grid.component.html',
})
export class TaskGridComponent implements OnInit {
  @Input() dataSource: TaskResponse[] = [];
  @Input() button = {
    details: true,
    edit: true,
	delete: false
  };
  @Output() onSelected: EventEmitter<TaskResponse> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }
  
   onSelectedHandle(event: TaskResponse){
    this.onSelected.emit(event);
  }
}
