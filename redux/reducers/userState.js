const initial_state = {
	user: '',
	email: '',
	career: '',
	exp: 1,
	lv: 1,
};

export const userState = (state = initial_state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'GET_USER':
			return { ...payload };
		case 'STEP_SUCCES':
			return { ...state, exp: state.exp + 50 };
		case 'COURSE_SUCCES':
			return { ...state, exp: state.exp + 10 };
		case 'BUG_SUCCES':
			return { ...state, exp: state.exp + 20 };
		case 'LEVEL_UP':
			return { ...state, exp: 0, lv: state.lv + 1 };
		default:
			return state;
	}
};
