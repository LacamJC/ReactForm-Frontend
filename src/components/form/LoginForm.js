import { useState } from 'react'
function LoginForm(){

    const [name, setName] = useState([])
    const [password, setPassword] = useState([])
    const [isLogged, setIsLogged] = useState(false)


    const handleSubmit = async (e) =>{
        e.preventDefault()
        const response = await fetch("http://localhost:3001/verifyUser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ name, password })
        })

        if(response.ok){
            const data = await response.json()
            
            console.log(data)
        }else{
            console.log("Erro ou usuario nao cadastrado")
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
                        name="password" 
                        onChange={(e)=>setPassword((e).target.value)}
                        autoComplete="off"    
                    ></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>
    )
}

export default LoginForm