import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  data: any;
constructor(
  private http: HttpClient,
) {}

// tslint:disable-next-line: typedef
onSubmit(data: any)
{
  this.http.get('http://localhost:3700/login', data)
  .subscribe((result) => {
    console.warn('result', result);
    console.log();
  });
  console.log(data);

}


}
