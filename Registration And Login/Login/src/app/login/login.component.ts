import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private authService: AuthServiceService) {}


  ngOnInit(): void {

  }
  // tslint:disable-next-line: typedef
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  // tslint:disable-next-line: typedef
  loginProcess(){
    if (this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result => {
        if (result.success) {
          console.log(result);
          alert(result.message);
        } else {
          alert(result.message);
        }
      });
    }
  }

}
