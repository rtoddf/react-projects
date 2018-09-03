'use strict';

// JSX - Javascript XML
var course = {
	name: 'This is JSX from app.js',
	subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor imperdiet leo at iaculis. Duis pharetra blandit nisi, eget varius mauris auctor ac.',
	options: []
};

var formSumbitted = function formSumbitted(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;
	if (option) {
		course.options.push(option);
		e.target.elements.option.value = "";
		renderTemplateOne();
	}
};

var removeAll = function removeAll() {
	course.options = [];
	renderTemplateOne();
};

var makeDecision = function makeDecision() {
	var randomNum = Math.floor(Math.random() * course.options.length);
	var option = course.options[randomNum];
	alert(option);
};

var renderTemplateOne = function renderTemplateOne() {
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
			course.options.map(function (course, i) {
				return React.createElement(
					'li',
					{ key: i },
					course
				);
			})
		),
		React.createElement(
			'button',
			{ disabled: course.options.length === 0, onClick: makeDecision },
			'What should I do?'
		),
		React.createElement(
			'button',
			{ onClick: removeAll },
			'remove all options'
		),
		React.createElement(
			'form',
			{ onSubmit: formSumbitted },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Submit'
			)
		)
	);

	var appRoot01 = document.getElementById("example01");
	ReactDOM.render(templateOne, appRoot01);
};

renderTemplateOne();

///////////////////////////

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

var appRoot02 = document.getElementById("example02");
var appRoot03 = document.getElementById("example03");

// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot02);
