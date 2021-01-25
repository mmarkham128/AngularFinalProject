import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service'
import { Task } from '../taskModel';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  id: number;
  myTask: Task;


  constructor(private taskData: TaskDataService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.taskData.getTaskById(this.id).subscribe(task => (this.myTask = task))
    });
  }
  onClickDelete(id) {
    let result = confirm('Are you absolutely sure you want to delete this task? I mean honestly, did you do it?')
    if (result === true) {
      this.taskData.deleteTask(id).subscribe(res => {
        console.log(res);

        this.ngOnInit()
      })
    } else {
      alert('Thats what I thought...')
    }

  }
}
