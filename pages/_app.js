import { Provider, useStore } from 'react-redux';
import reduxStore, { wrapper } from '../store';
const store = reduxStore();

//Styles
import '../assets/css/styles.scss';

const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
};

export default wrapper.withRedux(MyApp);
