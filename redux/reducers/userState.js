const initial_state = {
	name: '',
};

export const userState = (state = initial_state, action) => {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
};
