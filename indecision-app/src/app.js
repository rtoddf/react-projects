console.log('app.js is running');

// JSX - Javascript XML
var template = (
	<div>
		<h1>This is JSX from app.js</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor imperdiet leo at iaculis. Duis pharetra blandit nisi, eget varius mauris auctor ac.</p>
		<ol>
			<li>item one</li>
			<li>item two</li>
		</ol>
	</div>
);

var templateTwo = (
	<div>
		<h1>Todd Fleeman</h1>
		<p>age: 51</p>
		<p>Location: Atlanta</p>
	</div>
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);