
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NoteResponse } from 'src/app/models/note.model';
@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
})
export class NoteCardComponent implements OnInit {
  @Input() dataSource: NoteResponse[] = [];
  @Output() onSelected: EventEmitter<NoteResponse> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }
  
   onSelectedHandle(event: NoteResponse){
    this.onSelected.emit(event);
  }
}

