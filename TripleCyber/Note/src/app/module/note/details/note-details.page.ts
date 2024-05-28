
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseEditComponent } from 'src/app/shared/components/base-edit.component';
import { NoteResponse } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';
@Component({
  templateUrl: './note-details.page.html',
})
export class NoteDetailsPage extends BaseEditComponent implements OnInit {
  ctrlName = 'note';
  note: NoteResponse = new NoteResponse;
    @Input() dataSource: NoteResponse = new NoteResponse();
   segments = [
	
  ];
  selectedSegment: string = 'notes';
  constructor(
    public route: ActivatedRoute,
    private noteService: NoteService
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
      this.noteService.getById(this.key).subscribe({
        next: (data: NoteResponse) => {
          if (!data) {
            return;
          }
          this.note = data;
		   this.hideLoader();
        },
         error: (err: any) => {
          this.showError(err);
        },
      });
    }
  }
}
