import { Link } from "react-router-dom"
import styles from '../../scss/layout/Nav.module.css'
import Header from "./Header"
import { CiMenuBurger } from "react-icons/ci"
function Nav(){

    function closeNav(){
      document.getElementById('checkbox').checked = false
      document.getElementById('menuBurguer').classList.remove(`${styles.animate}`)
    }

    function animateBurguer(){
      const burguer = document.getElementById('menuBurguer')
      const checkbox = document.getElementById('checkbox').checked

      checkbox ? burguer.classList.add(`${styles.animate}`):burguer.classList.remove(`${styles.animate}`)
    }

    return(
        <>
      <Header/>
      <nav className={styles.nav_menu}>
          <input type="checkbox" id="checkbox" onClick={animateBurguer} className={styles.check}></input>
          <CiMenuBurger className={styles.menuBurguer} id="menuBurguer"/>
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