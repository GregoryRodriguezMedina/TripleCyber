
import { Component, OnInit, Input } from '@angular/core';
import { NoteResponse } from 'src/app/models/note.model';
@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
})
export class NoteItemComponent implements OnInit {
  @Input() dataSource: NoteResponse = new NoteResponse;  
  constructor() {
  }
  ngOnInit(): void {
  }  
}
