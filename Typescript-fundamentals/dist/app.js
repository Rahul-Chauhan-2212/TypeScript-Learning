"use strict";
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("Clicked");
});
//Generics
function insertAtBeginning(array, value) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1, 2, 3];
console.log(insertAtBeginning(demoArray, -1));
//Class
class Student {
    constructor(first, last, age, courses) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    enroleCourse(course) {
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
let rahul;
rahul = {
    firstName: "Rahul",
    age: 26,
    greet() {
        console.log("Hi " + this.firstName);
    },
};
class Instructor {
    constructor(name, age) {
        this.firstName = name;
        this.age = age;
    }
    greet() {
        console.log("Hi " + this.firstName);
    }
}
//# sourceMappingURL=app.js.map