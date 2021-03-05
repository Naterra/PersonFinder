import * as types from '../types';

export const setSearchKeyword = keyword => dispatch => {
	dispatch({ type: types.SET_SEARCH_KEYWORD, payload: keyword });
};
