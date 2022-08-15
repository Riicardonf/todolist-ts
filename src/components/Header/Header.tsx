import rocket from '../../assets/rocket.svg';

import styles from './Header.module.css';

export function Header(){
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img src={rocket} />  
        <h1></h1>
      </div>
    </header>
  )
}