/*
모든 자료구조는 더 적합한 상황이 있고 자료가 복잡해질수록 더 효율적인 자료구조가 존재한다

pre-requisite ES2015 class syntax

*/

// class Student {
//     constructor(firstName, lastName, year){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.grade = year;
//     }
// }

// let firstStudent = new Student("Colt", "Steele",1);
// let secondStudent = new Student("Blue", "Steele",2);

class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }
    static enrollStudents(){
        return "ENROLLING STUDENTS!"
    }
    
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);

//static
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
//console.log(p1.distance(p1, p2)); // 7.0710678118654755
