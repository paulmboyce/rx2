import { combineReducers, createStore } from "redux";
import balanceReducer from "../state/reducers/balanceReducer";

const rxStore = function () {
	const reducers = combineReducers({
		BALANCE: balanceReducer,
	});

	return createStore(reducers);
};

export default rxStore;
