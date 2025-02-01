class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public introduce(): void {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  // public name: string = "Tony Stark";
  readonly studentId: number;
  public grade: string;
  static totalStudents: number = 0;

  constructor(studentId: number, grade: string) {
    super("Tony Stark", 22);
    this.studentId = studentId;
    this.grade = grade;
    Student.totalStudents++;
  }

  public introduce(): void {
    console.log(`Hi, I am ${this.name}, a student in grade ${this.grade}.`);
  }

  public static getTotalStudents(): void {
    console.log(`Total Students: ${Student.totalStudents}`);
  }
}

class Teacher extends Person {
  // public name: string = "Steve Rogers";
  readonly teacherId: number;
  subject?: string;

  static totalTeacher: number = 0;

  constructor(teacherId: number, subject?: string) {
    super("Steve Rogers", 30);
    this.teacherId = teacherId;
    this.subject = subject;
    Teacher.totalTeacher++;
  }

  public static getTotalTeachers(): void {
    console.log(`Total Teachers: ${Teacher.totalTeacher}`);
  }

  public introduce(): void {
    console.log(`Hi, I am ${this.name}, and I teach ${this.subject}.`);
  }
}

abstract class Staff {
  department: string;
  salary: number;

  abstract workDetails(): void;
}

class Clerk extends Staff {
  department: string = "Non teaching Staff";
  declare salary: number;
  responsibility: string = "Managing attendance records.";

  constructor(salary: number) {
    super();
    this.salary = salary;
  }
  setSalary(salary: number) {
    this.salary = salary;
  }

  getSalary() {
    console.log(`Salary: ${this.salary}`);
  }
  workDetails() {
    console.log("Managing attendance records");
  }
}

let s1 = new Student(101, "10th");

let t1 = new Teacher(1, "Computer Science");

let c1 = new Clerk(20000);

s1.introduce();
t1.introduce();

Student.getTotalStudents();
Teacher.getTotalTeachers();

c1.workDetails();
