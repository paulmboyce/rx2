import React from "react";
import rxStore from "../state/rxStore";
import createPolicy from "../state/actions/createPolicy";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.rx = rxStore();
	}

	render() {
		this.rx.dispatch(createPolicy("BOB", 25));

		return <div>hello Redux! Balance: {this.rx.getState().BALANCE}</div>;
	}
}

export default App;
