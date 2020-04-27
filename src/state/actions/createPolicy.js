const CREATE_POLICY = "CREATE_POLICY";
const createPolicy = function (name, fee) {
	return {
		type: CREATE_POLICY,
		payload: {
			name: name,
			fee: fee,
		},
	};
};

export { createPolicy, CREATE_POLICY };
