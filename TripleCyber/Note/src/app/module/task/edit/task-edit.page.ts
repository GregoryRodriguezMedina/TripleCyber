
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseEditComponent } from 'src/app/shared/components/base-edit.component';
import { TaskResponse } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
@Component({
  templateUrl: './task-edit.page.html',
})
export class TaskEditPage extends BaseEditComponent implements OnInit {  
  ctrlName = 'task';
  task: TaskResponse = new TaskResponse;
  constructor(
    private taskService: TaskService,
    public route: ActivatedRoute  
  ) {   
		super()		
  }
  ngOnInit() {
	this.setEditTranslate();
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
 onSave(form: FormGroup): void {
    if (form.invalid) {
      this.warning(this.config.form.inValid);
      return;
    }
    this.confirm(this.config.confirm).then((r) => {
      if (r.role === 'ok') {
        this.task = form.value;
		this.task.id = this.key;
        this.showLoader();
        this.taskService.update(this.task).subscribe({
          next: (res: any) => {
            this.success(this.config.form.edit);
            this.router.navigate(['tabs/tasks']);
            this.hideLoader();
          },
          error: (err: any) => {
            this.showError(err);
          },
        });
      }
    });
  }
}
