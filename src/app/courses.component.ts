import { Component } from '@angular/core';

@Component({ selector : 'courses', template : `<h2>Courses</h2> {{title}}` })
export class CoursesComponent {
    title = "The title of the courses page!";
}