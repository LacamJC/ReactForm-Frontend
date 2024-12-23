import { useState, useEffect } from 'react'
import Estados from '../../data/estados.json'
import toast, { Toaster } from 'react-hot-toast'
import url from '../../data/url.json'
import { Link } from 'react-router-dom'
import ShowPassword from '../events/ShowPassword'
function CadUser(){

    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [estado, setEstado] = useState()
    const [erro, setErro] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        password: ' ',
        state: ''
    })
    
    const notifySuccess = () => toast.success('Usuario cadastrado com sucesso')
    const notifyError = () => toast.error('Erro ao cadastrar usuario')
    const notifyErrorServer = () => toast.error('Falha de comunicação com o servidor')

    const handleChange = (event) =>{
        const { name, value} = event.target 


        if(name == "password")
        {
            const input = document.getElementById(name)
            console.log(input.value.length)

            // if(input.value.length >= 6 )
            // {
            //     document.getElementById('minChar').classList.add('text-success')      
            //     document.getElementById('minChar').classList.remove('text-danger')

            // }
            // else{
            //     document.getElementById('minChar').classList.remove('text-success')
            //     document.getElementById('minChar').classList.add('text-danger')

                
            // }

            input.value.length >= 6 ? document.getElementById('minChar').classList.add('text-success') : document.getElementById('minChar').classList.remove('text-success')
            input.value.length < 6 ? document.getElementById('minChar').classList.add('text-danger') : document.getElementById('minChar').classList.remove('text-danger')

            input.value.length <= 12 ? document.getElementById('maxChar').classList.add('text-success') : document.getElementById('maxChar').classList.remove('text-success')
            input.value.length > 12 ? document.getElementById('maxChar').classList.add('text-danger') : document.getElementById('maxChar').classList.remove('text-danger')


        }


        setFormData({
            ...formData,
            [name]: value
        })
    }


   async function cadastrarUsuario(e){
        e.preventDefault()
        console.log(formData)
        try {
            const response = await fetch(`${url.url}/cadUsers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            });
    
            if(response.ok)
            {
                const data = await response.json();
                console.log("Usuario cadastrado com sucesso")
                console.log(data.message)
                
                notifySuccess()
            }else{
                console.log("Erro ao cadastrar usuario")
                notifyError()
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            notifyErrorServer()
            setErro(true)
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
                        required
                        autoFocus
                    ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password"
                        name="password" 
                        required 
                        minLength="6"
                        maxLength="12"
                        onChange={handleChange}
                        autoComplete="off"    
                    ></input>
                    <ShowPassword/>
                    <div className="form-text">
                        <h3 className='form-text'>Sua senha deve conter</h3>
                        <ul className='form-text'>
                            <li id='minChar'>Minimo 6 caracteres</li>
                            <li id='maxChar'>Maximo 12 caracteres</li>
                        </ul>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="estado" className='form-label'>Estado</label>
                    <select className='form-select'  onChange={handleChange} id='state' name='state'>
                        {Estados.map((estado, index) =>(
                            <option key={index} value={estado.estado}>{estado.estado}</option>
                        ))}
                    </select>
                </div>
                <div class="mb-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <span>
                    Já possui cadastro? <Link to="/login">Faça Login !</Link>
                </span>

            </form>
        
            <Toaster/>
        </>
    )
}

export default CadUser