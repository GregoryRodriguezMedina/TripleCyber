
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NoteItemComponent } from './note-item.component';
	
export const components = [
  NoteItemComponent
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
        TranslateModule.forChild()
    ]
})
export class NoteItemModule {}
