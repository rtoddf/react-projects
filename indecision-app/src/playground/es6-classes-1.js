class Person {
    constructor(name="Anonymous", age=0){
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, my name is ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

const me = new Person("Todd", 51);
const other = new Person();

console.log(me.getDescription())
console.log(other.getDescription())

// https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7707676?start=0 at 10:45