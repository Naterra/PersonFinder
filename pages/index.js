import Layout from '../components/Layout';
import InfoBox from '../components/InfoBox';
import SearchBox from '../components/SearchBox';
import RecordsList from '../components/RecordsList';

export default function MainPage(props) {
	return (
		<Layout>
			<h1>The Person Finder</h1>
			<InfoBox>
				If you just can’t find someone and need to know what they look like, you’ve come
				to the right place! Just type the name of the person you are looking for below
				into the search box!
			</InfoBox>
			<SearchBox />
			<RecordsList />
		</Layout>
	);
}
