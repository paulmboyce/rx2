import { combineReducers, createStore } from "redux";
import { balanceReducer } from "./reducers/balanceReducer";
import { policyReducer } from "./reducers/policyReducer";
import { claimReducer } from "./reducers/claimReducer";
const rxStore = function () {
	const reducers = combineReducers({
		BALANCE: balanceReducer,
		POLICIES: policyReducer,
		CLAIMS: claimReducer,
	});

	return createStore(reducers);
};

export default rxStore;
