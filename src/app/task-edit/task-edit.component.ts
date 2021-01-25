import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskDataService } from '../task-data.service';
import { Task } from '../taskModel';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  
  editTask: Task= new Task();

  constructor(private taskDataService: TaskDataService, private router: Router, private route: ActivatedRoute ) { }

onSave(myForm){
  this.taskDataService.editTask(this.editTask).subscribe(t=>
    this.router.navigate(["list"]));

}


  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.taskDataService
      .getTaskById(+param["id"]).subscribe(
        (t => (this.editTask = t))
      )
    })
  }

}
