import { PostJobService } from './../post-job.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { JobDetail2Component} from '../job-detail2';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Data } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
// import {NgxPaginationModule} from 'ngx-pagination';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


// tslint:disable-next-line: class-name
export class postjobs {
  constructor(
    public JobNo: string,
    public JobTitle: string,
    public CompanyName: string,
    public Location: string,
    public ShortDescription: string,
    public FullDescription: string,
    public JobNature: string,
    public SalaryRange: string,
  ){
  }
}

@Component({
  selector: 'app-job-detail2',
  templateUrl: './job-detail2.component.html',
  styleUrls: ['./job-detail2.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class JobDetail2Component implements OnInit {
  data: any;
  // service: any;
  // id: any;
  // postjobs: any;
  // PostJobService: any;
  // rs: any;
  deleteID: any;
  JobNo: any;
  editForm!: FormGroup;

  // pagination
  displayedColumns: string[] = ['JobNo', 'JobTitle', 'CompanyName', 'Location', 'ShortDescription', 'FullDescription', 'JobNature', 'SalaryRange'];
  dataSource = new MatTableDataSource<postjobs>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }



  constructor(
    private http: HttpClient,
    private postData: PostJobService,
    private modalService: NgbModal,
    private httpClient: HttpClient,
    private fb: FormBuilder,

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

  // get list

  ngOnInit()
  {
    this.postData.getPostjobs().subscribe((result) => {
      console.warn('result', result );
      this.data = result;
    });

    this.editForm = this.fb.group({
      JobNo: [''],
      JobTitle: [''],
      CompanyName: [''],
      Location: [''],
      ShortDescription: [''],
      FullDescription: [''],
      JobNature: [''],
      SalaryRange: ['']
    });
  }


  // delete start

  openDelete(targetModal: any, postjobs: Data) {
    this.deleteID = postjobs.JobNo;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    const deleteURL = 'http://localhost:3500/postjobs/' + this.deleteID;
    // console.log(deleteURL);
    this.httpClient.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }


// Edit start

openEdit(targetModal: any, postjobs: Data) {
  this.modalService.open(targetModal, {
   backdrop: 'static',
   size: 'lg'
 });
  this.editForm.patchValue({
    JobNo: postjobs.JobNo,
    JobTitle: postjobs.JobTitle,
    CompanyName: postjobs.CompanyName,
    Location: postjobs.Location,
    ShortDescription: postjobs.ShortDescription,
    FullDescription: postjobs.FullDescription,
    JobNature: postjobs.JobNature,
    SalaryRange: postjobs.SalaryRange,
  });

}
    onSave(){
      const editUrl = 'http://localhost:3500/postjobs';
      console.log(this.editForm.value);
      this.httpClient.put ( editUrl, this.editForm.value, { withCredentials: false })
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });

    }



}



