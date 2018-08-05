'use strict';

console.log('app.js is running');

// JSX - Javascript XML
var course = {
	name: 'This is JSX from app.js',
	subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor imperdiet leo at iaculis. Duis pharetra blandit nisi, eget varius mauris auctor ac.',
	items: ['item 01', 'item 02']
};

var templateOne = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		course.name
	),
	React.createElement(
		'p',
		null,
		course.subtitle
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			course.items[0]
		),
		React.createElement(
			'li',
			null,
			course.items[1]
		)
	)
);

var user = {
	name: 'Larry Davis',
	age: 54,
	location: 'Atlanta'
};

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'name: ',
		user.name
	),
	React.createElement(
		'p',
		null,
		'age: ',
		user.age
	),
	React.createElement(
		'p',
		null,
		'location: ',
		user.location
	)
);

var appRoot01 = document.getElementById('example01');
var appRoot02 = document.getElementById('example02');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateOne, appRoot01);
ReactDOM.render(templateTwo, appRoot02);
