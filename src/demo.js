"use strict";
const stud = {
    name: "harini",
    rollno: 2,
    id: 3714,
    printst() {
        console.log(`${this.name} ${this.rollno}`);
    }
};
console.log("Student information:");
stud.printst();
console.log(stud.id);
