
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../../../layout/header/header.module';
import { NotFoundModule } from "../../../layout/not-found/not-found.module";
import { TaskDetailsPage } from './task-details.page';
import { TaskItemModule } from '../shared/task-item/task-item.module';
	
			import { NoteGridModule } from '../../../note/shared/note-grid/note-grid.module';
			
export const components = [TaskDetailsPage];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    IonicModule,
	TranslateModule.forChild(),
    HeaderModule,
	NotFoundModule,
    TaskItemModule,
					
			NoteGridModule,		 	
			
  ],
})
export class TaskDetailsModule {}
