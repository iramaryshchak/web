var OnlineCourse = /** @class */ (function () {
    function OnlineCourse(title, durationHours) {
        this.title = title;
        this.durationHours = durationHours;
        this.students = [];
    }
    OnlineCourse.prototype.registerStudent = function (student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        }
        else {
            console.log("".concat(student, " is already registered for ").concat(this.title, "."));
        }
    };
    OnlineCourse.prototype.isStudentRegistered = function (student) {
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s === student) {
                return true;
            }
        }
        return false;
    };
    return OnlineCourse;
}());
var CourseManager = /** @class */ (function () {
    function CourseManager() {
        this.courses = [];
    }
    CourseManager.prototype.addCourse = function (course) {
        if (!this.findCourse(course.title)) {
            this.courses.push(course);
        }
        else {
            console.log("Course ".concat(course.title, " already exists."));
        }
    };
    CourseManager.prototype.removeCourse = function (courseName) {
        this.courses = this.courses.filter(function (course) { return course.title !== courseName; });
    };
    CourseManager.prototype.findCourse = function (courseName) {
        var result = this.courses.filter(function (course) { return course.title === courseName; });
        return result.length > 0 ? result[0] : undefined;
    };
    CourseManager.prototype.listCourses = function () {
        this.courses.forEach(function (course) {
            console.log("Course: ".concat(course.title));
            console.log("Duration: ".concat(course.durationHours, " hours"));
            console.log("Students: ".concat(course.students.join(", ")));
            console.log("---");
        });
    };
    return CourseManager;
}());
var course1 = new OnlineCourse("TypeScript", 20);
var course2 = new OnlineCourse("JavaScript", 15);
var course3 = new OnlineCourse("Web Development ", 25);
var courseManager = new CourseManager();
courseManager.addCourse(course1);
courseManager.addCourse(course2);
courseManager.addCourse(course3);
course1.registerStudent("Антон");
course1.registerStudent("Даша");
course2.registerStudent("Максим");
course3.registerStudent("Денис");
course3.registerStudent("Маша");
courseManager.listCourses();
