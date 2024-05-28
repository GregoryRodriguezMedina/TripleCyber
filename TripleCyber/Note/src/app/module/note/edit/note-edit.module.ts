
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../../../layout/header/header.module';
import { NotFoundModule } from "../../../layout/not-found/not-found.module";
import { NoteEditPage } from './note-edit.page';
import { NoteFormModule } from '../shared/note-form/note-form.module';
export const components = [NoteEditPage];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    IonicModule,
	TranslateModule.forChild(),
    HeaderModule,
	NotFoundModule,
    NoteFormModule
  ],
})
export class NoteEditModule {}
