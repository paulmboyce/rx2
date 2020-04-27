const createPolicy = function (name, fee) {
	return {
		type: "CREATE_POLICY",
		payload: {
			name: name,
			fee: fee,
		},
	};
};

export default createPolicy;
