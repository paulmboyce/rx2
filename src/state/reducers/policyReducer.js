import { DELETE_POLICY } from "../actions/deletePolicyAction";
import { CREATE_POLICY } from "../actions/createPolicyAction";
const policyReducer = function (oldPolicies = [], action) {
	if (action.type === CREATE_POLICY) {
		return [...oldPolicies, action.payload];
	}
	if (action.type === DELETE_POLICY) {
		return oldPolicies.filter((v) => v.name !== action.payload.name);
	}
	return oldPolicies;
};

export { policyReducer };
