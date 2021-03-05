import Image from 'next/image';
import styles from './PersonCard.module.scss';

export default function PersonCard({ data }) {
	return (
		<div className={styles.personCard}>
			<div className={styles.avatar}>
				<Image width={96} height={96} alt={data.name} layout="fixed" src={data.avatar} />
			</div>

			<div className={styles.wrapper}>
				<div className={styles.name}>{data.name}</div>
				<div className={styles.description}>{data.description}</div>
			</div>
		</div>
	);
}
