
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  NotePage  } from './note.page';
import { NoteCreatePage } from './create/note-create.page';
import { NoteEditPage } from './edit/note-edit.page';
import { NoteDetailsPage } from './details/note-details.page';
const routes: Routes = [
  {
    path: '',
    component: NotePage,
  },
  {
    path: 'create',
	 //loadChildren: () => import('./create/note-create.module').then((m) => m.NoteCreateModule),
    component: NoteCreatePage,
  },
  {
    path: 'edit/:id',
	//loadChildren: () => import('./create/note-create.module').then((m) => m.NoteCreateModule),
    component: NoteEditPage,
  },
  {
    path: 'details/:id',
	// loadChildren: () => import('./create/note-create.module').then((m) => m.NoteCreateModule),
    component: NoteDetailsPage,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRouting {}
