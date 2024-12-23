import { useState, useEffect} from 'react'
import toast, {Toaster} from 'react-hot-toast'
import url from '../data/url.json'

function ServerStatus(){
    const [status, setStatus] = useState('Verificando servidor...') 

    const fetchData = async() =>{
      try{
        const response = await fetch(`${url.url}/ping`)
        const data = await response.json()
        // console.log(data)
        setStatus(data.status ? "Ligado" : " Desligado")
        // console.log(status)
      }
  
      catch(err){
        // console.log("Erro ao se comunicar com servidor:" + err)
        setStatus('Desligado')
        // notifyError()
      }
      }

      setInterval(()=>{
        // console.log("Passou cinco segundos")
        fetchData()}, 5000)

    return(
        <>
            <h2 className="my-2 text-center">Status do servidor: {status}</h2>
            <Toaster/>
        </>
    )
}

export default ServerStatus