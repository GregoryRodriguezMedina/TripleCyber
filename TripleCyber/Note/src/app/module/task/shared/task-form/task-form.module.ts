
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TaskFormComponent } from './task-form.component';
import { SearchableSelectComponent } from 'src/app/shared/components/searchable-select/searchable-select.component';

export const components = [
  TaskFormComponent
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
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
		SearchableSelectComponent
    ]
})
export class TaskFormModule {}
