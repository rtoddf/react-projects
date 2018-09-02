// arguments object - no longer bound with arrow functions
// const add = function(a, b) {
//     console.log(arguments)
//     return a + b;
// }

const add = (a, b) => {
    // arguments is not defined
    // console.log(arguments)
    return a + b;
}

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: "andrew",
    cities: ["Atlanta", "New York"],
    // es6 syntax
    printPlaceLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
        
        // const cityMessages = this.cities.map((city) => {
        //     //map allows you to transform by creating a new array
        //     return this.name + " has lived in " + city;
        // });
        // return cityMessages;
    },
    // es5 syntax
    printPlacesLived: function(){
        console.log(this.name)
        console.log(this.cities)

        // this.cities.forEach(function(city){
        //     // there is no bound this
        //     console.log(this.name + " hase lives in " + city)
        // })

        // with an arrow function - this IS bound to the object it was created in
        this.cities.forEach((city) => {
            console.log(this.name + " has lives in " + city)
        })
    }
}

console.log(user.printPlaceLived());


// challenge
const multiplier = {
    // array of numbers
    numbers: [1, 2, 8],
    // multiply by - single number
    multiplyBy: 2,
    // method - multiply that returns the numbers that have been multiplied using map
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply())

// https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7707644?start=15 at 17:15