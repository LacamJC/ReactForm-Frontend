import { useState, useEffect} from 'react'


function ServerStatus(){
    const [status, setStatus] = useState('Verificando servidor...')

    useEffect(()=>{
        const fetchData = async() =>{
        try{
          const response = await fetch('http://localhost:3001/ping')
          const data = await response.json()
          console.log(data)
          setStatus(data.status ? "Ligado" : " Desligado")
          console.log(status)
        }
    
        catch(err){
          console.log("Erro ao se comunicar com servidor:" + err)
          setStatus('Desligado')
        }
        }
    
        fetchData()
      }, [])


    return(
        <>
            <h2 className="my-2 text-center">Status do servidor: {status}</h2>
        </>
    )
}

export default ServerStatus