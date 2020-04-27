import { CREATE_POLICY } from "../actions/createPolicy";

const balanceReducer = function (oldBalance = 100, action) {
	if (action.type === CREATE_POLICY) {
		return oldBalance + action.payload.fee;
	}

	return oldBalance;
};

export default balanceReducer;
