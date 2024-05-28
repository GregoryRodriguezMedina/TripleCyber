
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseEditComponent } from 'src/app/shared/components/base-edit.component';
import { CommonValidations } from 'src/app/shared/validations/common-validations';
import { ControllerMode } from 'src/app/shared/type/type';
import { TaskRequest } from 'src/app/models/task.model';
import { Select } from 'src/app/shared/models/select';
   

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  //styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent extends BaseEditComponent implements OnInit{
  ctrlName = 'task';
  @Input() mode : ControllerMode = 'create';
  @Input() task: TaskRequest = new TaskRequest();
  @Output() onSave: EventEmitter<FormGroup> = new EventEmitter();
  
  
  constructor(
  private formBuilder: FormBuilder,
   
  ) {
    super();
    this.formBuilding();
	   	
  }
  ngOnInit(): void {
    this.formSetValue();
	this.isEdit = this.mode === 'edit';
  }
  save(): void {
    this.onSave.emit(this.form);
  }
   
  private formSetValue(): void { 

		this.controls.task.setValue(this.task.task);
		
		this.controls.priority.setValue(this.task.priority);
		
		this.controls.solution.setValue(this.task.solution);
		
		this.controls.solved.setValue(this.task.solved);
		       
  }
  private formBuilding(): void { 
    this.form = this.formBuilder.group({    
	      			
					task: ['', [Validators.required,Validators.maxLength(250)]],
				  			
					priority: ['', [Validators.required]],
				  			
					solution: ['', [Validators.maxLength(500)]],
				  			
					solved: [],
					
    });
  }
}
