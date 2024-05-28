
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseEditComponent } from 'src/app/shared/components/base-edit.component';
import { NoteResponse } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';
@Component({
  templateUrl: './note-edit.page.html',
})
export class NoteEditPage extends BaseEditComponent implements OnInit {  
  ctrlName = 'note';
  note: NoteResponse = new NoteResponse;
  constructor(
    private noteService: NoteService,
    public route: ActivatedRoute  
  ) {   
		super()		
  }
  ngOnInit() {
	this.setEditTranslate();
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
 onSave(form: FormGroup): void {
    if (form.invalid) {
      this.warning(this.config.form.inValid);
      return;
    }
    this.confirm(this.config.confirm).then((r) => {
      if (r.role === 'ok') {
        this.note = form.value;
		this.note.id = this.key;
        this.showLoader();
        this.noteService.update(this.note).subscribe({
          next: (res: any) => {
            this.success(this.config.form.edit);
            this.router.navigate(['tabs/notes']);
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
