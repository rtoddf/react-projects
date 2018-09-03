class Person {
    constructor(name="Anonymous", age=0){
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, my name is ${this.name}.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `. Their major is ${this.major}.`
        }
        
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLoaction){
        super(name, age);
        this.homeLoaction = homeLoaction;
    }
    hasHomeLocation(){
        return !!this.homeLoaction;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()){
            greeting += ` I am from ${this.homeLoaction}.`
        }
        return greeting;
    }

}

const me = new Person("Todd", 51);
const other = new Person();

const him = new Student("Larry", 54, "Drama");
const otherHim = new Student();

const bob = new Traveler("Bob", 46, "Los Angeles");
const susan = new Traveler();

console.log(him.getDescription());
console.log(otherHim.getDescription());
console.log(bob.getGreeting());
console.log(susan.getGreeting());

// console.log(me.getDescription())
// console.log(other.getDescription())

// https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7707676?start=0 at 10:45