import { Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostJobService } from './../post-job.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  data: any;

  constructor(
    private postData: PostJobService,
  ) { }

  ngOnInit(): void {
    this.postData.getPostjobs().subscribe((result) => {
      console.warn('result', result );
      this.data = result;

    });
  }

}
