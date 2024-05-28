
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseEditComponent } from 'src/app/shared/components/base-edit.component';
import { TaskResponse } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
@Component({
  templateUrl: './task-details.page.html',
})
export class TaskDetailsPage extends BaseEditComponent implements OnInit {
  ctrlName = 'task';
  task: TaskResponse = new TaskResponse;
    @Input() dataSource: TaskResponse = new TaskResponse();
   segments = [
	
			 { id: 'notes', name: "note.title" },
			
  ];
  selectedSegment: string = 'notes';
  constructor(
    public route: ActivatedRoute,
    private taskService: TaskService
  ) {   
		super();		
  }
   segmentChanged(ev: any) {
    this.selectedSegment = ev.detail.value;
  }
  ngOnInit() {	
    this.key = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');
    if (this.key && this.key > 0) {
      this.showLoader();
      this.taskService.getById(this.key).subscribe({
        next: (data: TaskResponse) => {
          if (!data) {
            return;
          }
          this.task = data;
		   this.hideLoader();
        },
         error: (err: any) => {
          this.showError(err);
        },
      });
    }
  }
}
