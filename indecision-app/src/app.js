// JSX - Javascript XML
const course = {
	name: 'This is JSX from app.js',
	subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor imperdiet leo at iaculis. Duis pharetra blandit nisi, eget varius mauris auctor ac.',
	options: []
}

const formSumbitted = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;
	if(option) {
		course.options.push(option);
		e.target.elements.option.value = "";
		renderTemplateOne();
	}
}

const removeAll = () => {
	course.options = [];
	renderTemplateOne();
}

const makeDecision = () => {
	const randomNum = Math.floor(Math.random() * course.options.length);
	const option = course.options[randomNum];
	alert(option);
}

const renderTemplateOne = () => {
	const templateOne = (
		<div>
			<h1>{course.name}</h1>
			{course.subtitle && <p>{course.subtitle}</p>}
			<p>{course.options.length > 0 ? 'you have options' : 'you have no options'}</p>
			{/* <p>{course.options.length}</p> */}
			<ol>
				{
					course.options.map((course, i) => <li key={i}>{course}</li>)
				}
			</ol>
	
			<button disabled={course.options.length === 0} onClick={makeDecision}>What should I do?</button>
			<button onClick={removeAll}>remove all options</button>

			<form onSubmit={formSumbitted}>
				<input type="text" name="option" />
				<button>Submit</button>
			</form>
	
		</div>
	);

	const appRoot01 = document.getElementById("example01");
	ReactDOM.render(templateOne, appRoot01);
}

renderTemplateOne();


///////////////////////////

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


const appRoot02 = document.getElementById("example02");
const appRoot03 = document.getElementById("example03");

// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot02);
