import {data} from '../data/data';
import styles from '../styles/header.module.css';


export default function Header(){
    return(
        <header className={styles.h}>
            <img className={styles.logo} src='/images/Logo.png'/>
            <nav className={styles.navMenu}>
                {data.sections.map(section => <span className={`semibold ${styles.itemMenu}`}>{section.name}</span>)}
            </nav>
        </header>
    );
};