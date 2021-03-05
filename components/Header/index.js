import styles from './Header.module.scss';
import Logo from '../Logo';

export default function Header(props){
    return(<div className={`container ${styles.header}`}>
        <Logo/>
    </div>)
}
