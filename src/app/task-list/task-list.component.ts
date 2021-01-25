import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../taskModel';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  taskList: Task[];
  task: Task = new Task();
  id: number;
  form: NgForm;



  constructor(private taskData: TaskDataService, private http: HttpClient, private route: ActivatedRoute) {

  }


  onSubmit(form: NgForm) {

    this.taskData.createTask(this.task).subscribe(task => {
      console.log(task);

      this.ngOnInit()
    }
    ); form.resetForm()
  }

  onClickDelete(id) {
    let result = confirm('Are you absolutely sure you want to delete this task? I mean honestly, did you REALLY do it?')
    if (result === true) {
      this.taskData.deleteTask(id).subscribe(res => {
        console.log(res);

        this.ngOnInit()
      })
    } else {
      alert('Thats what I thought...')
    }

  }

  ngOnInit(): void {
    this.taskData.getTask()
      .subscribe(task => (this.taskList = task));

  }
}














