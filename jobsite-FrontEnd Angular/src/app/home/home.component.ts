import { Component, OnInit } from '@angular/core';
import { PostJobService } from './../post-job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
