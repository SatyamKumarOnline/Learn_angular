import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { ClassField } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

intermediateCourseData = COURSES[0];
beginnnersCourseData = COURSES[1];
ngRXCourseData = COURSES[2];
courses = COURSES;

// @ViewChild(CourseCardComponent, {static: false})
// card: CourseCardComponent;

@ViewChild('container', {static: false})
containerDiv: ElementRef;

@ViewChild('cardRef1', {static: false, read: ElementRef})
card1: ElementRef;

@ViewChild('cardRef2', {static: false})
card2: CourseCardComponent;

@ViewChild('courseImg', {static: false})
img1: ElementRef;

@ViewChildren('container',  {read: ElementRef})
courseList: QueryList<ElementRef>;

@ViewChildren(CourseCardComponent, {read: ElementRef})
courseCardChildren: QueryList<ElementRef>;


constructor() {
  console.log(this.card1);
}

ngAfterViewInit(): void {
  this.courseCardChildren.changes.subscribe(
    cards => console.log(cards)
  );

  console.log("After View Init::",this.card1);
  console.log("CourseList:;" , this.courseList);
  console.log("CourseCardChildren::", this.courseCardChildren);
}



courseSelectedHandler = function(course: Course) {
  console.log('11 You have clicked on this course, ::: ' + this.containerDiv);
  console.log('22 You have clicked on this course, ::: ' + this.card1);
};

EditCourseList = function(){
  this.courses.push(this.courses[3]);
};




}

// Using View ClassField, we can query the template of the component as
// element ref or component
