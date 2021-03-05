import { useDispatch } from 'react-redux';
import styles from './SearchBox.module.scss';
import { setSearchKeyword } from '../../store/actions';

export default function SearchBox(props) {
	const dispatch = useDispatch();

	const onInputChanged = e => {
		const keyword = e.target.value;
		dispatch(setSearchKeyword(keyword));
	};

	return (
		<div className={styles.searchBox}>
			<div className={styles.inputWrapper}>
				<input onChange={onInputChanged} type="text" placeholder="Type a name" />
			</div>
		</div>
	);
}
