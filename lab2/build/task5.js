"use strict";
class OnlineCourse {
    constructor(title, durationHours) {
        this.title = title;
        this.durationHours = durationHours;
        this.students = [];
    }
    registerStudent(student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        }
        else {
            console.log(`${student} is already registered for ${this.title}.`);
        }
    }
    isStudentRegistered(student) {
        for (const s of this.students) {
            if (s === student) {
                return true;
            }
        }
        return false;
    }
}
class CourseManager {
    constructor() {
        this.courses = [];
    }
    addCourse(course) {
        if (!this.findCourse(course.title)) {
            this.courses.push(course);
        }
        else {
            console.log(`Course ${course.title} already exists.`);
        }
    }
    removeCourse(courseName) {
        this.courses = this.courses.filter((course) => course.title !== courseName);
    }
    findCourse(courseName) {
        const result = this.courses.filter((course) => course.title === courseName);
        return result.length > 0 ? result[0] : undefined;
    }
    listCourses() {
        this.courses.forEach((course) => {
            console.log(`Course: ${course.title}`);
            console.log(`Duration: ${course.durationHours} hours`);
            console.log(`Students: ${course.students.join(", ")}`);
            console.log("---");
        });
    }
}
const course1 = new OnlineCourse("TypeScript", 20);
const course2 = new OnlineCourse("JavaScript", 15);
const course3 = new OnlineCourse("Web Development ", 25);
const courseManager = new CourseManager();
courseManager.addCourse(course1);
courseManager.addCourse(course2);
courseManager.addCourse(course3);
course1.registerStudent("Антон");
course1.registerStudent("Даша");
course2.registerStudent("Максим");
course3.registerStudent("Денис");
course3.registerStudent("Маша");
courseManager.listCourses();
