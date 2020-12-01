import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent {
  data: any;
  constructor(
    private http: HttpClient,
    ){}

    // tslint:disable-next-line: typedef
    onSubmit(data: any)
  {
    this.http.post('http://localhost:3500/postjobs', data)
    .subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(data);
  }

}
