import { useState } from 'react'
import url from '../../data/url.json'
import toast, { Toaster } from 'react-hot-toast'
function LoginForm(){

    const [name, setName] = useState([])
    const [password, setPassword] = useState([])
    const [erro, setErro] = useState(false)
    const [isLogged, setIsLogged] = useState(false)

    const [errorMessage, setErrorMessage] = useState("")

        function showPassword(){
            console.log("Click")
            const passwordInput = document.getElementById('password')

            passwordInput.type == 'password' ? passwordInput.type='text' : passwordInput.type='password'
        }
   
        const notifyError = () => toast.error("erro ao logar")
        const notifySuccess = () => toast.success("Login com sucesso")

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setErro()
        localStorage.removeItem('Data')
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
                notifyError()
                setErro(true)
            }else{
                console.log("Sem probelmas")
                setErro(false)
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
            setErro(true)
        }
    }


    return(
        <>
            <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input 
                        type="text" 
                        className="form-control" 
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
                        className="form-control" 
                        id="password"

                        required
                        minLength='6'
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
                {erro ? <p className='alert alert-danger'>Senha ou usuario inválidos</p> : ""}
                {isLogged ? <p className='alert alert-success'>Login efetuado com sucesso</p> : ""}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Toaster/>
        </>
    )
}

export default LoginForm