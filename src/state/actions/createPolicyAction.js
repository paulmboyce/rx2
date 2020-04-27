const CREATE_POLICY = "CREATE_POLICY";
const createPolicyAction = function (name, fee) {
	return {
		type: CREATE_POLICY,
		payload: {
			name: name,
			fee: fee,
		},
	};
};

export { createPolicyAction, CREATE_POLICY };
