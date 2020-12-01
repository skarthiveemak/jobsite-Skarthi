import { JobDetail2Component } from './job-detail2/job-detail2.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostJobService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }
  id(id: any) {
    throw new Error('Method not implemented.');
  }
// tslint:disable-next-line: member-ordering
url = 'http://localhost:3500/postjobs';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  getPostjobs()
  {
    return this.http.get(this.url);
  }


// delete

  deletepostjobs(id: number): Observable<JobDetail2Component> {
    const url = `${this.url}/${id}`;
    return this.http.delete<JobDetail2Component>(url, this.httpOptions);
  }
}
