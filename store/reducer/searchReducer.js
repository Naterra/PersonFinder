import { SET_SEARCH_KEYWORD } from '../types';

export default function searchReducer(state = null, action) {
	switch (action.type) {
		case SET_SEARCH_KEYWORD:
			return action.payload;
		default:
			return state;
	}
}
