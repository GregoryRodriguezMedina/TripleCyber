
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from "../../layout/header/header.module";
import { NotFoundModule } from "../../layout/not-found/not-found.module";
import { PaginationComponent } from "../../shared/components/pagination/pagination.component";
import { NgxPaginationModule } from 'ngx-pagination';
import { TaskRouting } from './task-routing';

import { TaskPage } from './task.page';
import { TaskDetailsModule } from './details/task-details.module';
import { TaskCreateModule } from './create/task-create.module';
import { TaskEditModule } from './edit/task-edit.module';

import { TaskGridModule } from "./shared/task-grid/task-grid.module";
import { TaskCardModule } from "./shared/task-card/task-card.module";
//import { TaskTableModule } from "./shared/task-table/task-table.module";
@NgModule({
    declarations: [TaskPage],
    imports: [
        IonicModule,
        CommonModule,
        TranslateModule.forChild(),
		NgxPaginationModule,
        PaginationComponent,
		NotFoundModule,
		HeaderModule,
		TaskRouting,
		TaskGridModule,
		TaskCardModule,
        //TaskTableModule,
		
		TaskCreateModule,
		TaskEditModule,
		TaskDetailsModule,
	]
})
export class TaskModule {}
