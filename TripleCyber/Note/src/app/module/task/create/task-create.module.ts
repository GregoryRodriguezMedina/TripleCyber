
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../../../layout/header/header.module';
import { TaskCreatePage } from './task-create.page';
import { TaskFormModule } from '../shared/task-form/task-form.module';
export const components = [TaskCreatePage];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    IonicModule,
	TranslateModule.forChild(),
    HeaderModule,
    TaskFormModule
  ],
})
export class TaskCreateModule {}
