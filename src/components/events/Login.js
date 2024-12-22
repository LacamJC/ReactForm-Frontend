import {Link} from "react-router-dom"
import styles from "../../scss/layout/Header.module.css"

function Login()
{
    return(
        <>  
            <h2 className={styles.header_connect}><Link to="/login">Login</Link> | <Link to="/CadastrarUsuario">Cadastre-se</Link></h2>
        </>
    )
}

export default Login