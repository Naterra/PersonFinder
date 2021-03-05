import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchBox.module.scss';
import { setSearchKeyword } from '../../store/actions';

export default function SearchBox(props) {
	const dispatch = useDispatch();
	const [keyword, setKeyword] = useState();

	useEffect(() => {
			let timer;
			if (keyword) {
				timer = setTimeout(() => {
					dispatch(setSearchKeyword(keyword));
				}, 1000);
			}
			return () => clearTimeout(timer);
		},
		[keyword]);

	return (
		<div className={styles.searchBox}>
			<div className={styles.inputWrapper}>
				<input onChange={e => setKeyword(e.target.value)} type="text" placeholder="Type a name" />
			</div>
		</div>
	);
}
