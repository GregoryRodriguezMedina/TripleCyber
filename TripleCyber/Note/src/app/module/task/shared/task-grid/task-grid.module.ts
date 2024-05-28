
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TaskGridComponent } from './task-grid.component';
export const components = [
  TaskGridComponent
];
@NgModule({
    declarations: [
        ...components
    ],
    exports: [
        ...components
    ],
    imports: [
        IonicModule,
        CommonModule,
        RouterModule,
        TranslateModule.forChild(),
    ]
})
export class TaskGridModule {}
