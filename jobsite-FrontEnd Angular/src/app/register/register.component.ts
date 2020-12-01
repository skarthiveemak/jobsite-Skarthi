import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    data: any;
  constructor(
    private http: HttpClient,
  ) {}

  // tslint:disable-next-line: typedef
  onSubmit(data: any)
  {
    this.http.post('http://localhost:3600/registers', data)
    .subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(data);
  }


}
