const DELETE_POLICY = "DELETE_POLICY";

const deletePolicyAction = function (name) {
	return {
		type: DELETE_POLICY,
		payload: { name: name },
	};
};

export { deletePolicyAction, DELETE_POLICY };
