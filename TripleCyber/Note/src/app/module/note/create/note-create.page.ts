
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseEditComponent } from 'src/app/shared/components/base-edit.component';
import { NoteRequest } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';
@Component({
  templateUrl: './note-create.page.html',
})
export class NoteCreatePage extends BaseEditComponent implements OnInit {  
	ctrlName = 'note';
  note: NoteRequest = new NoteRequest;
  constructor(
    private noteService: NoteService,
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
        this.note = form.value;
        this.showLoader();

        this.noteService.create(this.note).subscribe({
          next: (res: any) => {
            this.success(this.config.form.create);
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
