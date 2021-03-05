import { connect } from 'react-redux';

import styles from './RecordsList.module.scss';
import data from '../../assets/data.json';
import RecordsListItem from '../PersonCard';

const RecordsList = ({ searchKeyword = '' }) => {
	const records = searchKeyword ? data.filter(item => {
				const userName = item.name.toLowerCase();
				return userName.includes(searchKeyword.toLowerCase());
			})
		: data;

	return <div className={styles.recordsList}>{records.map((item, i) => <RecordsListItem key={i} data={item} />)}</div>;
};

function mapStateToProps({ searchKeyword }) {
	return { searchKeyword };
}

export default connect(mapStateToProps, {})(RecordsList);
