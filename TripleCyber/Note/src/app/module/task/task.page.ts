
import { Component, OnInit } from '@angular/core';
import { BaseLoadComponent } from 'src/app/shared/components/base-load.component';
import { ActivatedRoute } from '@angular/router';
import { DisplayMode } from 'src/app/shared/type/type';
import { Select } from 'src/app/shared/models/select';
import { TaskResponse } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { TaskFilter } from 'src/app/models/filter/task.filter';
@Component({
  templateUrl: './task.page.html',
})
export class TaskPage extends BaseLoadComponent implements OnInit {
  ctrlName = 'task';
  tasks: TaskResponse[] = [];
  taskFilter: TaskFilter = new TaskFilter();
  filterTypes: Select[] = [
  
  ];
  segments = [
    { id: -1, name: this.ctrlName + '.status.all' },
    { id: 1, name: this.ctrlName + '.status.active' },
    { id: 0, name: this.ctrlName + '.status.suspended' },
  ];
  selectedSegment: number = -1;
  displayMode = DisplayMode;
  selectedDisplayMode: DisplayMode = 1;
  constructor(
    public route: ActivatedRoute,    
	private taskService: TaskService
  ) {   
	super();
    this.tasks = [];	 
    this.url = '/tabs/tasks';
    this.route.queryParams.subscribe({
      next: (params: any) => {
        this.filter.currentPage = parseInt(params['page'] || this.filter.currentPage, 10);
        this.filter.itemsPerPage = parseInt(params['perPage'] || this.filter.itemsPerPage, 10);
		this.taskFilter.state = params['state'];
		if(this.taskFilter.state)
          this.selectedSegment = this.taskFilter.state ? 1 : 0;
        this.taskFilter.search = params['search'];     
		this.taskFilter.from = params['from'];
        this.taskFilter.to = params['to'];
		
        this.applyFilter();
      },
    });
  }
  ngOnInit() {   
  }
  override onPageChange(page: number) {
    this.taskFilter.page = page;
	this.taskFilter.perPage = this.filter.itemsPerPage;
    this.router.navigate([this.url], {
      queryParams: {
        ...this.taskFilter,
      },
    });
  }
  segmentChanged(ev: any) {
	this.clearFilter();
    this.selectedSegment = parseInt(ev.detail.value, 10);
    this.taskFilter.state =
      this.selectedSegment === -1 ? null : this.selectedSegment === 1;
    this.onPageChange(1);
  }
  changedDisplay(event: DisplayMode) {
    this.selectedDisplayMode = event;
  }
  searchHandle(q: string) {   
   this.clearFilter();
    this.filter.q = q;
	this.taskFilter.search =q;
    const split = q.split(':');
    const type = split[0];
    const value = split[1];
    if (type === 'id'){
      this.taskFilter.code = parseInt(value ?? 0, 10);
      if(this.taskFilter.code === 0)
        this.taskFilter.code = null;
      }       
			
    this.onPageChange(1);
  }
clearFilter(){
			
}
clearSearchFilter() {
    this.filter.q = '';
    this.clearFilter();
     this.onPageChange(1);
  }
  applyFilter() {
	this.tasks = [];
    this.taskFilter.page = this.filter.currentPage;
    this.taskFilter.perPage = this.filter.itemsPerPage;
    this.showLoader();
    this.taskService.getPaginated(this.taskFilter).subscribe({
      next: (data: any) => {
        this.filter.totalItems = data.itemCount;
        this.tasks = data.items;
        this.hideLoader();
      },
      error: (err: any) => {
        this.showError(err);
      },
    });
  }
}
