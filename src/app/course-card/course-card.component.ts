import { Component, OnInit, Input, Output, EventEmitter, ContentChild, ElementRef, ContentChildren, QueryList } from '@angular/core';
import {COURSES} from '../../db-data';
import {Course} from '../model/course';
import { NonNullAssert } from '@angular/compiler';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;
  @Input()
  courseIndex: Number;

  @Output() courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent, {static: false, read: ElementRef})
  image: ElementRef;

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<CourseImageComponent>;

  @ContentChild('lessonHeading', {static: false})
  heading: CourseCardComponent;

   viewCourse() {
    this.courseSelected.emit(this.course);
  }

  isImageVisible(){
      return this.course && this.course.iconUrl;
  }

  constructor() {}

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    debugger;
   // console.log("Content Child:: ", this.image );
    console.log("Content ChildRen:: ", this.images );

  }
}
