import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskEditComponent } from './task-edit/task-edit.component';


const routes: Routes = [
{path:"", redirectTo:"list", pathMatch:'full'},
{path:"list", component: TaskListComponent},
{path: 'taskid/:id', component: TaskDetailComponent},
{path: "edit/:id", component: TaskEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
