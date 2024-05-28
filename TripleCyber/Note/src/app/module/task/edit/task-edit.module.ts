
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../../../layout/header/header.module';
import { NotFoundModule } from "../../../layout/not-found/not-found.module";
import { TaskEditPage } from './task-edit.page';
import { TaskFormModule } from '../shared/task-form/task-form.module';
export const components = [TaskEditPage];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    IonicModule,
	TranslateModule.forChild(),
    HeaderModule,
	NotFoundModule,
    TaskFormModule
  ],
})
export class TaskEditModule {}
