'use strict';

console.log('app.js is running');

// JSX - Javascript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'This is JSX from app.js'
	),
	React.createElement(
		'p',
		null,
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor imperdiet leo at iaculis. Duis pharetra blandit nisi, eget varius mauris auctor ac.'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'item one'
		),
		React.createElement(
			'li',
			null,
			'item two'
		)
	)
);

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Todd Fleeman'
	),
	React.createElement(
		'p',
		null,
		'age: 51'
	),
	React.createElement(
		'p',
		null,
		'Location: Atlanta'
	)
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
