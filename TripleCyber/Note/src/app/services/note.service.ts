
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteResponse, NoteRequest } from '../model/note.mode';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  apiServer: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiServer = baseUrl + 'note';
  }
  getById(id: number): Observable<NoteResponse> {
    return this.http.get<NoteResponse>(`${this.apiServer}/${id}`);
  }
  getPaginated(page:number, perPage: number): Observable<NoteResponse[]> {
    return this.http.get<NoteResponse[]>(this.apiServer
      + "?page=" + page
      + "&perPage=" + perPage
    );
  }
  create(data: NoteRequest): Observable<any> {
    console.log(data, 'Post');
    return this.http.post(this.apiServer, data);
  }
  update(data: NoteRequest): Observable<any> {
    return this.http.put(this.apiServer, data);
  }
  delete(data: NoteRequest): Observable<any> {
    return this.http.put(this.apiServer, data);
  }
}
