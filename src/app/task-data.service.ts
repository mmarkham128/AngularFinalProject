import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of} from "rxjs";
import { Task } from './taskModel';
import { map } from 'rxjs/operators';
import { TaskListComponent } from './task-list/task-list.component';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  taskUrl= "http://localhost:3000/task";

  getTask() : Observable<Task[]>  {
    return this.http.get<Task[]>(this.taskUrl);
  };

  getTaskById = (id: number) : Observable<Task> => {
    return this.http.get<Task>(this.taskUrl + "/" + id);
  };
  
  createTask(body): Observable<Task[]> {
  
    return this.http.post<Task[]>(this.taskUrl, body);
    
  }
  
  deleteTask (id): Observable <Task>{

    
   return this.http.delete<Task>(this.taskUrl + "/" + id);
    
  }

  editTask(task: Task): Observable <Task>{
    return this.http.put<Task>(this.taskUrl + "/" + task.id, task)
  }
  
  
  constructor(private http: HttpClient) { }
}

