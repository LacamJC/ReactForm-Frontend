import Logoff from "../events/Logoff"
import styles from '../../scss/layout/Header.module.css'
import Login from "../events/Login"

function Header()
{
    const user = JSON.parse(localStorage.getItem('Data'))
    console.log(localStorage.getItem('Data'))
    return(
        <>
            <header className={styles.header}>
                <h1 className={styles.header__title}>React Forms</h1>
                {user ? (
                <div className={styles.header_connect}>
                    <h2>Olá {user.user}</h2>
                    <Logoff/>
                </div>
                ) : (<Login/>)          
                } 
            </header>
        </>
    )
}

export default Header