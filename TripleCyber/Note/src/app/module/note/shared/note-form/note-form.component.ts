
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseEditComponent } from 'src/app/shared/components/base-edit.component';
import { CommonValidations } from 'src/app/shared/validations/common-validations';
import { ControllerMode } from 'src/app/shared/type/type';
import { NoteRequest } from 'src/app/models/note.model';
import { Select } from 'src/app/shared/models/select';
   
			import { TaskService } from 'src/app/services/task.service';			 
			

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  //styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent extends BaseEditComponent implements OnInit{
  ctrlName = 'note';
  @Input() mode : ControllerMode = 'create';
  @Input() note: NoteRequest = new NoteRequest();
  @Output() onSave: EventEmitter<FormGroup> = new EventEmitter();
  
			selectTasks: Select[] = [];
			
  
  constructor(
  private formBuilder: FormBuilder,
   
			 private taskService: TaskService,
			
  ) {
    super();
    this.formBuilding();
	   	
			   this.onBindSelectTasks();
			 	
  }
  ngOnInit(): void {
    this.formSetValue();
	this.isEdit = this.mode === 'edit';
  }
  save(): void {
    this.onSave.emit(this.form);
  }
   	
			   onBindSelectTasks() {
					this.taskService
					.getAll()
					.subscribe({
					  next: (res: any) => {
						if(!res) return;
						this.selectTasks = res.map((item: any) => {
						 return {
							text: item.,
							id: item.id || 0,
							selected: item.id === this.note.taskId,
						  };
						});
					  },
					  error: (err: any) => {
						this.showError(err);
					  },
					});
				  }				  
			
  private formSetValue(): void { 

		this.controls.taskId.setValue(this.note.taskId);
		
		this.controls.note.setValue(this.note.note);
		       
  }
  private formBuilding(): void { 
    this.form = this.formBuilder.group({    
	      			
					taskId: ['', [Validators.required]],
				  			
					note: ['', [Validators.required,Validators.maxLength(200)]],
					
    });
  }
}
