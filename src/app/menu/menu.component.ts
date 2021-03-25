import { Component, OnInit } from '@angular/core';

import { Course } from '../courses/courses.models';
import { CoursesService } from '../courses/courses.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  isCollapse = true;
  toggleState() {
    let foo = this.isCollapse
    this.isCollapse = foo === false ? true : false;
  }

  courses: Course[];

  private getCourses(): void {
    this.coursesService.getCourses().subscribe(res => {
      this.courses = res;
    });
  }

}
