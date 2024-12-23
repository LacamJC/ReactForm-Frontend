import { useState } from 'react'
import url from '../../data/url.json'
import styles from '../../scss/components/LoginForm.module.css'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import Return from '../events/Return'
function LoginForm(){

    const [name, setName] = useState([])
    const [password, setPassword] = useState([])

    const [isLogged, setIsLogged] = useState(false)


        function showPassword(){
            console.log("Click")
            const passwordInput = document.getElementById('password')

            passwordInput.type == 'password' ? passwordInput.type='text' : passwordInput.type='password'
        }
   
        const notifyError = (msg) => toast.error(msg)
        const notifySuccess = () => toast.success("Login com sucesso")

    const handleSubmit = async (e) =>{
        e.preventDefault()

        localStorage.removeItem('Data')

        try{
            const response = await fetch(`${url.url}/verifyUser`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ name, password })
            })
            if(response.ok){
                const data = await response.json()
                
                if(data.message)
                {
                    console.log(data.message)
                    notifyError(data.message)
              
                }else{
                    console.log("Sem probelmas")
                 
                    setIsLogged(true)
                    notifySuccess()
                      localStorage.setItem('Data', JSON.stringify(data))
    
                      setTimeout(()=>{
                        console.log("Passou dois sgunds")
                        window.location.reload()
                      }, 2000)
                }
                // window.location.reload()
                
            }else{
                console.log("Erro ou usuario nao cadastrado")

            }
        }catch(error){
            console.log("Erro ao tentar o fetch " + error )
            notifyError('Sem comunicação com o servidor')
        }
        
    }


    return(
        <>
            <form className={` mx-auto my-5 ${styles.form}`} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input 
                        type="text" 
                        className={`form-control ${styles.input}`}
                        id="name"
                        name="name" 
                        
                        required
                        autoFocus
                        onChange={(e)=>setName((e).target.value)}
                        autoComplete="off"
                    ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="senha" className="form-label">senha</label>
                    <input 
                        type="password" 
                        className={`form-control ${styles.input}`}
                        id="password"
                        maxLength="12"
                        minLength="6"
                        required
                        name="password" 
                        onChange={(e)=>setPassword((e).target.value)}
                        autoComplete="off"    
                    ></input>
                    
                </div>
                
                <div className='mb-3 form-check'>
                        <input 
                            type='checkbox'
                            id='showPassword'
                            className='form-check-input'
                            onClick={showPassword}
                            
                        ></input>
                        <label htmlFor="showPassword" className='form-check-label'>Mostrar senha</label>
                    </div>
                {isLogged ? <p className='alert alert-success'>Login efetuado com sucesso</p> : ""}
                <div className="mb-3 mx-auto">
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                </div>
                <span className={styles.span}><p>Não possui cadastro ?</p> <Link to="/CadastrarUsuario">Faça seu cadastro aqui !</Link></span>
                
            </form>
            <Toaster/>
        </>
    )
}

export default LoginForm