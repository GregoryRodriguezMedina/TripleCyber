
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseEditComponent } from 'src/app/shared/components/base-edit.component';
import { TaskRequest } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
@Component({
  templateUrl: './task-create.page.html',
})
export class TaskCreatePage extends BaseEditComponent implements OnInit {  
	ctrlName = 'task';
  task: TaskRequest = new TaskRequest;
  constructor(
    private taskService: TaskService,
    public route: ActivatedRoute 
  ) {   
		super();	
  }
  ngOnInit() {
	this.setCreateTranslate();
  }
 onSave(form: FormGroup): void {
    if (form.invalid) {
      this.warning(this.config.form.inValid);
      return;
    }
    this.confirm(this.config.confirm).then((r) => {
      if (r.role === 'ok') {
        this.task = form.value;
        this.showLoader();

        this.taskService.create(this.task).subscribe({
          next: (res: any) => {
            this.success(this.config.form.create);
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
