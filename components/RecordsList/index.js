import { connect } from 'react-redux';

import styles from './RecordsList.module.scss';
import data from '../../assets/data.json';
import RecordsListItem from '../PersonCard';

const RecordsList = ({ searchKeyword }) => {
	const records = searchKeyword ? data.filter(item => item.name.includes(searchKeyword)) : data;

	return (
		<div className={styles.recordsList}>
			{records.map((item, i) => {
				return <RecordsListItem key={i} data={item} />;
			})}
		</div>
	);
};

function mapStateToProps({ searchKeyword }) {
	return { searchKeyword };
}

export default connect(mapStateToProps, {})(RecordsList);
