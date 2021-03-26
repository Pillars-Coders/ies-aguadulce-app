import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CoursesComponent, CourseComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    NgbModule
  ]
})
export class CoursesModule { }
