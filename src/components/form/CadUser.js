import { useState } from 'react'
import Estados from '../../data/estados.json'
// import bcrypt from 'bcrypt'
function CadUser(){

    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()
    const [estado, setEstado] = useState()
    const [erro, setErro] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        password: ' ',
        state: ''
    })
    
   

    const handleChange = (event) =>{
        const { name, value} = event.target 
        setFormData({
            ...formData,
            [name]: value
        })
    }


   async function cadastrarUsuario(e){
        e.preventDefault()

        console.log({nome}, {senha})
        

    
       
        try {
            const response = await fetch('http://localhost:3001/cadUsers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            console.log(`Dados enviados com sucesso: ${data}`);
        } catch (error) {
            console.error('Error sending data:', error);
            setErro(true)
            alert('An error occurred. Please try again later.');
        }
        
        
   }

    return(
        <>
            <form onSubmit={cadastrarUsuario} className="w-50 mx-auto my-5">
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name"
                        name="name" 
                        onChange={handleChange}
                        value={nome}
                        autoComplete="off"
                    ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="senha" className="form-label">senha</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password"
                        name="password" 
                        onChange={handleChange}
                        autoComplete="off"    
                    ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="estado" className='form-label'>Estado</label>
                    <select className='form-select' onChange={handleChange} id='state' name='state'>
                        {Estados.map((estado, index) =>(
                            <option key={index} value={estado.estado}>{estado.estado}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {nome}
        </>
    )
}

export default CadUser