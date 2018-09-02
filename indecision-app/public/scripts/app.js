'use strict';

// JSX - Javascript XML
var course = {
	name: 'This is JSX from app.js',
	subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor imperdiet leo at iaculis. Duis pharetra blandit nisi, eget varius mauris auctor ac.',
	options: ['item 01', 'item 02']
};

var templateOne = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		course.name
	),
	course.subtitle && React.createElement(
		'p',
		null,
		course.subtitle
	),
	React.createElement(
		'p',
		null,
		course.options.length > 0 ? 'you have options' : 'you have no options'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			course.options[0]
		),
		React.createElement(
			'li',
			null,
			course.options[1]
		)
	)
);

var user = {
	name: 'Larry Davis',
	age: 54,
	location: 'Dekalb'
};

function getLocation(location) {
	return location ? React.createElement(
		'p',
		null,
		'Location: ',
		location
	) : undefined;
}

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'name: ',
		user.name ? user.name : 'anonymous'
	),
	user.age && user.age >= 18 && React.createElement(
		'p',
		null,
		'age: ',
		user.age
	),
	getLocation(user.location)
);

var appRoot01 = document.getElementById("example01");
var appRoot02 = document.getElementById("example02");
var appRoot03 = document.getElementById("example03");

// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateOne, appRoot01);
// ReactDOM.render(templateTwo, appRoot02);

var count = 0;
var addOne = function addOne() {
	count++;
	renderCounterApp();
};
var minusOne = function minusOne() {
	count--;
	renderCounterApp();
};

var reset = function reset() {
	count = 0;
	renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
	var templateThree = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Count: ',
			count
		),
		React.createElement(
			'button',
			{ onClick: addOne },
			'+1'
		),
		React.createElement(
			'button',
			{ onClick: minusOne },
			'-1'
		),
		React.createElement(
			'button',
			{ onClick: reset },
			'Reset'
		)
	);

	ReactDOM.render(templateThree, appRoot03);
};

renderCounterApp();
