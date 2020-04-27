import React from "react";
import rxStore from "../state/rxStore";
import { createPolicyAction } from "../state/actions/createPolicyAction";
import { deletePolicyAction } from "../state/actions/deletePolicyAction";
import { claimAction } from "../state/actions/claimAction";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.rx = rxStore();
		this.unsubscribe = this.rx.subscribe(this.handleStateChange);
		this.state = { BALANCE: 100 };
	}

	handleStateChange = () => {
		this.handlePropChange("BALANCE");
	};

	handlePropChange = (prop) => {
		const oldVal = this.state[prop];
		const newVal = this.rx.getState()[prop];
		if (oldVal !== newVal) {
			this.setState({ prop: newVal });
			console.log(`${prop} value changed, from ${oldVal} to ${newVal}`);
		}
	};

	componentWillUnmount = () => {
		this.unsubscribe();
		console.log("UNSUBSCRIBED");
	};

	componentDidMount() {
		this.rx.dispatch(createPolicyAction("BOB", 25));
		this.rx.dispatch(claimAction("BOB", 73));
		console.log("STATE: ", this.rx.getState());
		this.rx.dispatch(deletePolicyAction("BOB"));
		this.rx.dispatch(createPolicyAction("MARY", 33));
	}

	render() {
		console.log("RENDER: ", this.rx.getState());
		return <div>hello Redux! Balance: {this.rx.getState().BALANCE}</div>;
	}
}

export default App;
