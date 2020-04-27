const CLAIM = "CLAIM";

const claimAction = function (name, amount) {
	return {
		type: CLAIM,
		payload: {
			name: name,
			amount: amount,
		},
	};
};

export { claimAction, CLAIM };
