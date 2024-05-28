
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from "../../layout/header/header.module";
import { NotFoundModule } from "../../layout/not-found/not-found.module";
import { PaginationComponent } from "../../shared/components/pagination/pagination.component";
import { NgxPaginationModule } from 'ngx-pagination';
import { NoteRouting } from './note-routing';

import { NotePage } from './note.page';
import { NoteDetailsModule } from './details/note-details.module';
import { NoteCreateModule } from './create/note-create.module';
import { NoteEditModule } from './edit/note-edit.module';

import { NoteGridModule } from "./shared/note-grid/note-grid.module";
import { NoteCardModule } from "./shared/note-card/note-card.module";
//import { NoteTableModule } from "./shared/note-table/note-table.module";
@NgModule({
    declarations: [NotePage],
    imports: [
        IonicModule,
        CommonModule,
        TranslateModule.forChild(),
		NgxPaginationModule,
        PaginationComponent,
		NotFoundModule,
		HeaderModule,
		NoteRouting,
		NoteGridModule,
		NoteCardModule,
        //NoteTableModule,
		
		NoteCreateModule,
		NoteEditModule,
		NoteDetailsModule,
	]
})
export class NoteModule {}
