
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../../../layout/header/header.module';
import { NotFoundModule } from "../../../layout/not-found/not-found.module";
import { NoteDetailsPage } from './note-details.page';
import { NoteItemModule } from '../shared/note-item/note-item.module';
	
			import { NoteItemModule } from '../../../note/shared/note-item/note-item.module';	 	
			
export const components = [NoteDetailsPage];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    IonicModule,
	TranslateModule.forChild(),
    HeaderModule,
	NotFoundModule,
    NoteItemModule,
					
			TaskItemModule,		 	
			
  ],
})
export class NoteDetailsModule {}
