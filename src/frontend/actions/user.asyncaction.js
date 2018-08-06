import {
	asyncCurrentUserSuccess,
	asyncCurrentUserFailed,
	asyncloaderStarted,
	asyncSaveUserSuccess,
	asyncSaveUserFailed,
	getCodesSuccess,
	getCodesFailed
} from './user.action';

import fetch from 'isomorphic-fetch';;

export const asyncLoginUser = (payload) => {
	return (dispatch) => {
		dispatch(asyncloaderStarted());
		return fetch(
			'/getUser',{
				method:'post',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			  })
			.then((res) => res.json())
			.then((data) => {
				if(data.length){
					dispatch(asyncCurrentUserSuccess(data));
					return Promise.resolve(data);
				}else{
					dispatch(asyncCurrentUserFailed('User Not Found'));
				}
			})
			.catch((err) => {
				dispatch(asyncCurrentUserFailed(err));
			});
	};
};
export const asyncSaveUser = (payload) => {
	return (dispatch) => {
		dispatch(asyncloaderStarted());
		return fetch(
			'/saveUser',{
				method:'post',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			  })
			.then((res) => res.json())
			.then((data) => {
				dispatch(asyncSaveUserSuccess([data.user]));
			})
			.catch((err) => {
				dispatch(asyncSaveUserFailed(err));
			});
	};
};
export const getCodes = () => {
	return (dispatch) => {
		dispatch(asyncloaderStarted());
		return fetch(
			'https://api.github.com/search/code',{
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			  })
			.then((res) => res.json())
			.then((data) => {
				dispatch(getCodesSuccess(data));
			})
			.catch((err) => {
				dispatch(getCodesFailed(err));
			});
	};
};

