import styles from './InfoBox.module.scss';

export default function InfoBox(props){
    return(<div className={styles.infoBox}>{props.children}</div>)
}
