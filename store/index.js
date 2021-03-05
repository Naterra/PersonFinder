import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import searchReducer from './reducer/searchReducer';

const rootReducer = combineReducers({
	searchKeyword: searchReducer
});

export const makeStore = () => {
	return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};

export const wrapper = createWrapper(makeStore);

export default makeStore;
