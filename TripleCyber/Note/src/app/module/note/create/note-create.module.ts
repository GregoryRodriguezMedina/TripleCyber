
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../../../layout/header/header.module';
import { NoteCreatePage } from './note-create.page';
import { NoteFormModule } from '../shared/note-form/note-form.module';
export const components = [NoteCreatePage];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    IonicModule,
	TranslateModule.forChild(),
    HeaderModule,
    NoteFormModule
  ],
})
export class NoteCreateModule {}
