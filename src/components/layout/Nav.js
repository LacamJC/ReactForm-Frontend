import { Link } from "react-router-dom"
import styles from '../../scss/components/Nav.module.css'
import Header from "./Header"
function Nav(){

    function closeNav(){
      document.getElementById('checkbox').checked = false
    }

    return(
        <>
      <Header/>
      <nav className={styles.nav_menu}>
          <input type="checkbox" id="checkbox" className={styles.check}></input>
          <ul className={styles.nav_menu__list}>
                <li className={styles.nav_menu__item}>
                  <Link to="/" className={styles.nav_menu__link} onClick={closeNav} aria-current="page">Home</Link>
                </li>
                <li className={styles.nav_menu__item}>
                <Link to="/CadastrarUsuario" onClick={closeNav} className={styles.nav_menu__link} >Cadastrar usuarios</Link>
                </li>
                <li className={styles.nav_menu__item}>
                  <Link className={styles.nav_menu__link} onClick={closeNav} to="/ListaUsuario">Lista de usuarios</Link>
                </li>
                <li className={styles.nav_menu__item}>
                  <Link className={styles.nav_menu__link} onClick={closeNav} to="/Login">Login</Link>
                </li>
          </ul>
        </nav>
        </>
    )
}

export default Nav