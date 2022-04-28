const button = document.querySelector("button")!;
button.addEventListener("click", () => {
  console.log("Clicked");
});

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

console.log(insertAtBeginning(demoArray, -1));

//Class

class Student {
  firstName: string;
  lastName: string;
  age: number;
  private courses: string[];
  constructor(first: string, last: string, age: number, courses: string[]) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.courses = courses;
  }

  enroleCourse(course: string) {
    this.courses.push(course);
  }

  listCourses() {
    return this.courses;
  }
}

const student = new Student("Rahul", "Chauhan", 26, ["Java", "Angular"]);
console.log(student);
student.enroleCourse("TypeScript");
console.log(student);

//interface
interface Human {
  firstName: string;
  age: number;
  greet: () => void;
}
let rahul: Human;
rahul = {
  firstName: "Rahul",
  age: 26,
  greet() {
    console.log("Hi " + this.firstName);
  },
};

class Instructor implements Human {
  firstName: string;
  age: number;
  constructor(name: string, age: number) {
    this.firstName = name;
    this.age = age;
  }
  greet() {
    console.log("Hi " + this.firstName);
  }
}
