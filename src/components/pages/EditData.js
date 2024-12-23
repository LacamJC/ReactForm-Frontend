import { useParams } from "react-router"
import { useEffect, useState } from "react"
import Estados from "../../data/estados.json"
import url from "../../data/url.json"
import toast, { Toaster } from 'react-hot-toast'
import ShowPassword from "../events/ShowPassword"
function EditData(){
    const notifySuccess = toast.success('Atualizações realizadas') 
    
     const [formData, setFormData] = useState({
            id: '',
            name: '',
            password: '',
            state: '',
            hasPermission: '',
            createdAt: "",
            updatedAt: ""
        })

        const [data, setData] = useState({ // dados do banco de dados
            id: '',
            name: '',
            password: '',
            state: '',
        })

    const params = useParams()
    const id = params.id

    useEffect(()=>{
        fetch(`${url.url}/getUser/${id}`, {
            method: "GET",
            headers: {
              'Content-type': 'application/json'
            }
          })
          .then(response => response.json())
          .catch(error =>{
            console.log("Erro ao acessar api: "+ error)
          })
          .then(data =>{
            console.log("Dados coletados")
            // console.log((data))

            
            // console.log("ASDOSADKKOASDOKOSADO")
            document.getElementById('name').value = data.name
            document.getElementById('password').value = data.password
            document.getElementById('state').value = data.state
            setData(data)
            setFormData({
                id: data.id,
                name: data.name,
                passsword: data.password,
                state: data.state,
                hasPermission: data.hasPermission,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt
            })
            // console.log(`///////////////// ${JSON.stringify(formData, null, 2)}`)
        
          })
          .catch(error =>{
            console.log("Erro"  + error)
           
          })
    }, [])



    

    function handleChange(event)
    {
        //   console.log(event.target.value)
        //   console.log(event.target.id)
          const {name, value } = event.target
          setFormData({
              ...formData,
              [name]: value
          })

        //   console.log(`]]]]]]]]]]]]]]]] ${JSON.stringify(formData, null, 2)}`)


    }

    async function putUser(e){
        e.preventDefault()
        console.log("Enviando dados para atualização")
        // console.log(`Dados atuais do usuario ${JSON.stringify(data, null, 2)}`)
        // console.log(`Novos dados do usuario ${JSON.stringify(formData, null, 2)}`)

        try{
            const response = await fetch(`${url.url}/atualizarDados/${id}`,{
                method: 'PUT',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(formData)
            })

            if(response.ok){
                const data = await response.json()
                // console.log("Novos dados enviados com sucesso")
                console.log(data.message)
                notifySuccess()
            }
            else{
                console.log("Erro ao enviar novos dados")
            }

        }catch(err){
            console.log(`Erro em fazer a requisicao : ` + err)
        }
        
    }

    return(
        <>
            <h1 className="my-5 text-center">Editando dados do usuario</h1>

            <form className="w-50 mx-auto" onSubmit={putUser}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" 
                    className="form-label">Nome</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="name"
                    name="name"
                    onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Senha
                    </label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <ShowPassword/>

                <div className="mb-3">
                    <label 
                        htmlFor="state"
                        className="form-label">
                            Estado
                    </label>
                    <select className="form-select" id="state" name="state" onChange={handleChange}>
                        {Estados.map((estado, index) =>(
                            <option 
                                key={index}
                                value={estado.estado}
                                >
                                    {estado.estado}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Toaster/>
        </>
    )
}

export default EditData