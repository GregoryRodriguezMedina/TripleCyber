
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskResponse, TaskRequest } from '../model/task.mode';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiServer: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiServer = baseUrl + 'task';
  }
  getById(id: number): Observable<TaskResponse> {
    return this.http.get<TaskResponse>(`${this.apiServer}/${id}`);
  }
  getPaginated(page:number, perPage: number): Observable<TaskResponse[]> {
    return this.http.get<TaskResponse[]>(this.apiServer
      + "?page=" + page
      + "&perPage=" + perPage
    );
  }
  create(data: TaskRequest): Observable<any> {
    console.log(data, 'Post');
    return this.http.post(this.apiServer, data);
  }
  update(data: TaskRequest): Observable<any> {
    return this.http.put(this.apiServer, data);
  }
  delete(data: TaskRequest): Observable<any> {
    return this.http.put(this.apiServer, data);
  }
}
