// JSX - Javascript XML
const course = {
	name: 'This is JSX from app.js',
	subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor imperdiet leo at iaculis. Duis pharetra blandit nisi, eget varius mauris auctor ac.',
	options: ['item 01', 'item 02']
}

const templateOne = (
	<div>
		<h1>{course.name}</h1>
		{course.subtitle && <p>{course.subtitle}</p>}
		<p>{course.options.length > 0 ? 'you have options' : 'you have no options'}</p>
		<ol>
			<li>{course.options[0]}</li>
			<li>{course.options[1]}</li>
		</ol>
	</div>
);

const user = {
	name: 'Larry Davis',
	age: 54,
	location: 'Dekalb'
}

function getLocation(location) {
	return location ? <p>Location: {location}</p> : undefined;
}

const templateTwo = (
	<div>
		<h1>name: {user.name ? user.name : 'anonymous'}</h1>
		{/*why &&*/}
		{(user.age && user.age >= 18) && <p>age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);

const appRoot01 = document.getElementById('example01');
const appRoot02 = document.getElementById('example02');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateOne, appRoot01);
ReactDOM.render(templateTwo, appRoot02);





