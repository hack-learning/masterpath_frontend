const initial_state = {
	user: '',
	email: '',
	career: '',
	exp: 1,
	lv: 1,
	progress: 0,
};

export const userState = (state = initial_state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'GET_USER':
			return { ...payload };
		case 'STEP_SUCCES':
			return { ...state, exp: state.exp + 50, progress: state.progress + 10 };
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
