import { CLAIM } from "../actions/claimAction";

const claimReducer = function (oldClaims = [], action) {
	if (action.type === CLAIM) {
		return [...oldClaims, action.payload];
	}

	return oldClaims;
};

export { claimReducer };
