import styles from './PersonCard.module.scss';

export default function PersonCard({data}){
    return(<div className={styles.personCard}>
        <img className={styles.avatar} src={data.avatar} />

        <div className={styles.wrapper}>
            <div  className={styles.name}>{data.name}</div>
            <div  className={styles.description}>{data.description}</div>
        </div>
    </div>);
}
