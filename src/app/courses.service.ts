interface course {
  title: string;
}

export class CourseService {
  getCourses(): course[] {
    return [{title: "Course 1"}, {title: "Course 2"}, {title: "Course 4"}];
  }
}
