import Home from './components/pages/Home'
import CadastrarUsuario from './components/pages/CadastrarUsuario'
import ListaUsuario from './components/pages/ListaUsuario'
import Header from './components/layout/Header'
import Login from './components/pages/Login'
import Footer from './components/layout/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/CadastrarUsuario" element={<CadastrarUsuario />} />
        <Route path="/ListaUsuario" element={<ListaUsuario/>}/>
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
