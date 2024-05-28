
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  TaskPage  } from './task.page';
import { TaskCreatePage } from './create/task-create.page';
import { TaskEditPage } from './edit/task-edit.page';
import { TaskDetailsPage } from './details/task-details.page';
const routes: Routes = [
  {
    path: '',
    component: TaskPage,
  },
  {
    path: 'create',
	 //loadChildren: () => import('./create/task-create.module').then((m) => m.TaskCreateModule),
    component: TaskCreatePage,
  },
  {
    path: 'edit/:id',
	//loadChildren: () => import('./create/task-create.module').then((m) => m.TaskCreateModule),
    component: TaskEditPage,
  },
  {
    path: 'details/:id',
	// loadChildren: () => import('./create/task-create.module').then((m) => m.TaskCreateModule),
    component: TaskDetailsPage,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRouting {}
