import { Link } from "react-router-dom"
import styles from '../../scss/components/Nav.module.css'
function Nav(){


 


    return(
        <>
      <header>
        
        <nav className={styles.nav_menu}>
          <ul className={styles.nav_menu__list}>
                <li className={styles.nav_menu__item}>
                  <Link to="/" className={styles.nav_menu__link} aria-current="page">Home</Link>
                </li>
                <li className={styles.nav_menu__item}>
                <Link to="/CadastrarUsuario" className={styles.nav_menu__link} >Cadastrar usuarios</Link>
                </li>
                <li className={styles.nav_menu__item}>
                  <Link className={styles.nav_menu__link} to="/ListaUsuario">Lista de usuarios</Link>
                </li>
                <li className={styles.nav_menu__item}>
                  <Link className={styles.nav_menu__link} to="/Login">Login</Link>
                </li>
          </ul>
        </nav>
      </header>
        </>
    )
}

export default Nav