class Header extends React.Component {
	render(){
		return (
			<div>
				<h1>App Name</h1>
				<h2>App Catch Line</h2>
			</div>
		)
	}
}

class Action extends React.Component {
	render(){
		return (
			<div>
				<button>What should I do now?</button>
			</div>
		)
	}
}

class Options extends React.Component {
	render(){
		return (
			<div>
				<p>placeholder for options</p>
			</div>
		)
	}
}

class AddOption extends React.Component {
	render(){
		return (
			<div>
				<p>placeholder for add options</p>
			</div>
		)
	}
}

const jsx = (
	<div>
		<Header />
		<Action />
		<Options />
		<AddOption />
	</div>
)

ReactDOM.render(jsx, document.getElementById("app"));