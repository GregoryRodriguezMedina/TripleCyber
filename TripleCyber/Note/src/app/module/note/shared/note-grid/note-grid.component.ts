
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NoteResponse } from 'src/app/models/note.model';
@Component({
  selector: 'app-note-grid',
  templateUrl: './note-grid.component.html',
})
export class NoteGridComponent implements OnInit {
  @Input() dataSource: NoteResponse[] = [];
  @Input() button = {
    details: true,
    edit: true,
	delete: false
  };
  @Output() onSelected: EventEmitter<NoteResponse> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }
  
   onSelectedHandle(event: NoteResponse){
    this.onSelected.emit(event);
  }
}
