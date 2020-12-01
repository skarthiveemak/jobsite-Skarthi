import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactComponent } from './contact/contact.component';
import { JobCategoryComponent } from './job-category/job-category.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { PostJobComponent } from './post-job/post-job.component';
import { JobCategory2Component } from './job-category2/job-category2.component';
import { Home2Component } from './home2/home2.component';
import { Routes, RouterModule } from '@angular/router';
import { JobDetail2Component } from './job-detail2/job-detail2.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import { TestComponent } from './test/test.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog-page', component: BlogPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'job-category', component: JobCategoryComponent },
  { path: 'job-detail', component: JobDetailComponent },
  { path: 'job-detail2', component: JobDetail2Component },
  { path: 'post-job', component: PostJobComponent },
  { path: 'home2', component: Home2Component },
  { path: 'job-category2', component: JobCategory2Component },
  { path: 'test', component: TestComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    BlogPageComponent,
    ContactComponent,
    JobCategoryComponent,
    JobDetailComponent,
    PostJobComponent,
    JobCategory2Component,
    Home2Component,
    JobDetail2Component,
    TestComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    // newly added
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
