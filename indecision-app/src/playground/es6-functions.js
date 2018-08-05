function square(x) {
	return x * x;
}

console.log(square(3));

// arrow functions are anonumous - they can't be named
// they have to be assigned to const or let
const cube = (x) => {
	return x * x * x;
}

// the more concise version can't be used ALL the time, but can be used for simple returns
const cubed = (x) => x * x * x;

console.log(cube(3))
console.log(cubed(4))

const getFirstName = (name) => name.split(' ')[0]
console.log(getFirstName('Todd Fleeman'))