import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { JobCategoryComponent } from './job-category/job-category.component';
import { JobCategory2Component } from './job-category2/job-category2.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobDetail2Component } from './job-detail2/job-detail2.component';
import { PostJobComponent } from './post-job/post-job.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog-page', component: BlogPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'job-category', component: JobCategoryComponent },
  { path: 'job-detail', component: JobDetailComponent },
  { path: 'job-detail2', component: JobDetail2Component},
  { path: 'post-job', component: PostJobComponent },
  { path: 'home2', component: Home2Component },
  { path: 'job-category2', component: JobCategory2Component },
  { path: 'register', component: RegisterComponent},
  { path: 'login ', component: LoginComponent},
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
