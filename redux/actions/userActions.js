export const login = () => (dispatch) => {
	const user = {
		user: 'Jose Garzon',
		email: 'jd.garzon12@gmail.com',
		career: 'Frontend',
		exp: 0,
		lv: 1,
	};

	dispatch({
		type: 'GET_USER',
		payload: user,
	});
};

export const stepSucces = () => (dispatch) => {
	dispatch({
		type: 'STEP_SUCCES',
	});
};

export const courseSucces = () => (dispatch) => {
	dispatch({
		type: 'COURSE_SUCCES',
	});
};

export const bugSucces = () => (dispatch) => {
	dispatch({
		type: 'BUG_SUCCES',
	});
};
