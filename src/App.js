import Home from './components/pages/Home'
import CadastrarUsuario from './components/pages/CadastrarUsuario'
import ListaUsuario from './components/pages/ListaUsuario'
import Nav from './components/layout/Nav'
import Login from './components/pages/Login'
import Footer from './components/layout/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './scss/Main.module.css' 
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className={styles.main}>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/CadastrarUsuario" element={<CadastrarUsuario />} />
          <Route path="/ListaUsuario" element={<ListaUsuario/>}/>
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
