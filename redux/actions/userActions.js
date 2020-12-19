export const login = () => (dispatch) => {
	const user = {
		user: 'Jose Garzon',
		email: 'jd.garzon12@gmail.com',
		career: 'Frontend',
		exp: 0,
		lv: 1,
		progress: 0,
	};

	dispatch({
		type: 'GET_USER',
		payload: user,
	});
};

export const stepSucces = () => (dispatch, getState) => {
	dispatch({
		type: 'STEP_SUCCES',
	});

	const { exp } = getState().userState;
	if (exp > 100) {
		const resExp = exp - 100;
		setTimeout(() => {
			dispatch({
				type: 'LEVEL_UP',
				payload: resExp,
			});
		}, 500);
	}
};

export const courseSucces = () => (dispatch, getState) => {
	dispatch({
		type: 'COURSE_SUCCES',
	});

	const { exp } = getState().userState;
	if (exp > 100) {
		const resExp = exp - 100;
		setTimeout(() => {
			dispatch({
				type: 'LEVEL_UP',
				payload: resExp,
			});
		}, 500);
	}
};

export const bugSucces = () => (dispatch, getState) => {
	dispatch({
		type: 'BUG_SUCCES',
	});

	const { exp } = getState().userState;
	if (exp > 100) {
		const resExp = exp - 100;
		setTimeout(() => {
			dispatch({
				type: 'LEVEL_UP',
				payload: resExp,
			});
		}, 500);
	}
};
