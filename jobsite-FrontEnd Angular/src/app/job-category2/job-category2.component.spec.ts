import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCategory2Component } from './job-category2.component';

describe('JobCategory2Component', () => {
  let component: JobCategory2Component;
  let fixture: ComponentFixture<JobCategory2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCategory2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCategory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
