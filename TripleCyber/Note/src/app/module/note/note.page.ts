
import { Component, OnInit } from '@angular/core';
import { BaseLoadComponent } from 'src/app/shared/components/base-load.component';
import { ActivatedRoute } from '@angular/router';
import { DisplayMode } from 'src/app/shared/type/type';
import { Select } from 'src/app/shared/models/select';
import { NoteResponse } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';
import { NoteFilter } from 'src/app/models/filter/note.filter';
@Component({
  templateUrl: './note.page.html',
})
export class NotePage extends BaseLoadComponent implements OnInit {
  ctrlName = 'note';
  notes: NoteResponse[] = [];
  noteFilter: NoteFilter = new NoteFilter();
  filterTypes: Select[] = [
  			
		 { id: 'task', text: this.ctrlName +'.task.label', selected: false },
		
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
	private noteService: NoteService
  ) {   
	super();
    this.notes = [];	 
    this.url = '/tabs/notes';
    this.route.queryParams.subscribe({
      next: (params: any) => {
        this.filter.currentPage = parseInt(params['page'] || this.filter.currentPage, 10);
        this.filter.itemsPerPage = parseInt(params['perPage'] || this.filter.itemsPerPage, 10);
		this.noteFilter.state = params['state'];
		if(this.noteFilter.state)
          this.selectedSegment = this.noteFilter.state ? 1 : 0;
        this.noteFilter.search = params['search'];     
		this.noteFilter.from = params['from'];
        this.noteFilter.to = params['to'];
					
			 this.noteFilter.tasks = params['tasks'];
			
        this.applyFilter();
      },
    });
  }
  ngOnInit() {   
  }
  override onPageChange(page: number) {
    this.noteFilter.page = page;
	this.noteFilter.perPage = this.filter.itemsPerPage;
    this.router.navigate([this.url], {
      queryParams: {
        ...this.noteFilter,
      },
    });
  }
  segmentChanged(ev: any) {
	this.clearFilter();
    this.selectedSegment = parseInt(ev.detail.value, 10);
    this.noteFilter.state =
      this.selectedSegment === -1 ? null : this.selectedSegment === 1;
    this.onPageChange(1);
  }
  changedDisplay(event: DisplayMode) {
    this.selectedDisplayMode = event;
  }
  searchHandle(q: string) {   
   this.clearFilter();
    this.filter.q = q;
	this.noteFilter.search =q;
    const split = q.split(':');
    const type = split[0];
    const value = split[1];
    if (type === 'id'){
      this.noteFilter.code = parseInt(value ?? 0, 10);
      if(this.noteFilter.code === 0)
        this.noteFilter.code = null;
      }       
					
		else if (type === 'task'){
			this.noteFilter.tasks?.push(parseInt(value ?? 0, 10));				  
	    }
				
    this.onPageChange(1);
  }
clearFilter(){
					
			 this.noteFilter.tasks = null;
				
}
clearSearchFilter() {
    this.filter.q = '';
    this.clearFilter();
     this.onPageChange(1);
  }
  applyFilter() {
	this.notes = [];
    this.noteFilter.page = this.filter.currentPage;
    this.noteFilter.perPage = this.filter.itemsPerPage;
    this.showLoader();
    this.noteService.getPaginated(this.noteFilter).subscribe({
      next: (data: any) => {
        this.filter.totalItems = data.itemCount;
        this.notes = data.items;
        this.hideLoader();
      },
      error: (err: any) => {
        this.showError(err);
      },
    });
  }
}
