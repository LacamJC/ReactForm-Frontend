import { Link } from "react-router-dom"
function Header(){
    return(
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="" className="navbar-brand" >React Forms</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <Link className="navbar-toggler-icon"></Link>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
              <Link to="/CadastrarUsuario" className="nav-link" >Cadastrar usuarios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ListaUsuario">Lista de usuarios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Header