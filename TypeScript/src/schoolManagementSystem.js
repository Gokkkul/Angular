var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        console.log("Hi, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(studentId, grade) {
        var _this = _super.call(this, "Tony Stark", 22) || this;
        _this.studentId = studentId;
        _this.grade = grade;
        Student.totalStudents++;
        return _this;
    }
    Student.prototype.introduce = function () {
        console.log("Hi, I am ".concat(this.name, ", a student in grade ").concat(this.grade, "."));
    };
    Student.getTotalStudents = function () {
        console.log("Total Students: ".concat(Student.totalStudents));
    };
    Student.totalStudents = 0;
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(teacherId, subject) {
        var _this = _super.call(this, "Steve Rogers", 30) || this;
        _this.teacherId = teacherId;
        _this.subject = subject;
        Teacher.totalTeacher++;
        return _this;
    }
    Teacher.getTotalTeachers = function () {
        console.log("Total Teachers: ".concat(Teacher.totalTeacher));
    };
    Teacher.prototype.introduce = function () {
        console.log("Hi, I am ".concat(this.name, ", and I teach ").concat(this.subject, "."));
    };
    Teacher.totalTeacher = 0;
    return Teacher;
}(Person));
var Staff = /** @class */ (function () {
    function Staff() {
    }
    return Staff;
}());
var Clerk = /** @class */ (function (_super) {
    __extends(Clerk, _super);
    function Clerk(salary) {
        var _this = _super.call(this) || this;
        _this.department = "Non teaching Staff";
        _this.responsibility = "Managing attendance records.";
        salary = _this.salary;
        return _this;
    }
    Clerk.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Clerk.prototype.getSalary = function () {
        console.log("Salary: ".concat(this.salary));
    };
    Clerk.prototype.workDetails = function () {
        console.log("Managing attendance records");
    };
    return Clerk;
}(Staff));
var s1 = new Student(101, "10th");
var t1 = new Teacher(1, "Computer Science");
var c1 = new Clerk(20000);
s1.introduce();
t1.introduce();
Student.getTotalStudents();
Teacher.getTotalTeachers();
c1.workDetails();
