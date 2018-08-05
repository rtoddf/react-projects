console.log('app.js is running');

// JSX - Javascript XML
var course = {
	name: 'This is JSX from app.js',
	subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor imperdiet leo at iaculis. Duis pharetra blandit nisi, eget varius mauris auctor ac.',
	items: ['item 01', 'item 02']
}

var templateOne = (
	<div>
		<h1>{course.name}</h1>
		<p>{course.subtitle}</p>
		<ol>
			<li>{course.items[0]}</li>
			<li>{course.items[1]}</li>
		</ol>
	</div>
);

var user = {
	name: 'Larry Davis',
	age: 54,
	location: 'Atlanta'
}

var templateTwo = (
	<div>
		<h1>name: {user.name}</h1>
		<p>age: {user.age}</p>
		<p>location: {user.location}</p>
	</div>
);

var appRoot01 = document.getElementById('example01');
var appRoot02 = document.getElementById('example02');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateOne, appRoot01);
ReactDOM.render(templateTwo, appRoot02)