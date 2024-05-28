
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TaskCardComponent } from './task-card.component';
export const components = [
  TaskCardComponent
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
export class TaskCardModule {}
