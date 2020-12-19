import { axiosClient } from '../../axiosClient';

export const login = () => async (dispatch) => {
	const { data, status } = await axiosClient.get('students-list/');
	dispatch({
		type: 'GET_USER',
		payload: data[0],
	});
};

export const stepSucces = () => (dispatch, getState) => {
	const { exp, id } = getState().userState;
	dispatch({
		type: 'STEP_SUCCES',
	});

	if (exp >= 100) {
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
	if (exp >= 100) {
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
	if (exp >= 100) {
		const resExp = exp - 100;
		setTimeout(() => {
			dispatch({
				type: 'LEVEL_UP',
				payload: resExp,
			});
		}, 500);
	}
};
