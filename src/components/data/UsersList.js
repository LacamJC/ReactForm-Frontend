import {useEffect, useState} from 'react'
import { IoIosCloseCircleOutline, IoIosAddCircle } from "react-icons/io";
import Delete from '../events/Delete';

function UsersList(){
    const [usuarios, setUsuarios] = useState([])
    const [erro, setErro] = useState(false)

    function reset(){
        fetch("http://localhost:3001/getUsers", {
            method: "GET",
            headers: {
              'Content-type': 'application/json'
            }
          })
            .then(response => response.json())
            .then(data => {
              console.log('Dados coletados');
              console.log(data);
              setUsuarios(data);
            })
            .catch(error => {
              console.error(`Erro: ${error}`);
            });
    }

    useEffect(()=>{
        fetch("http://localhost:3001/getUsers", {
            method: "GET",
            headers: {
              'Content-type': 'application/json'
            }
          })
            .then(response => response.json())
            .catch(error =>{
              console.log(`ERRd: ${error}`)
              setErro(true)
            })
            .then(data => {
              console.log('Dados coletados');
              console.log(data);
              setUsuarios(data);
              setErro(false)
            })
            .catch(error => {
              console.error(`Erro: ${error}`);
              setErro(false)
            });
        
    }, [])

    return(
        <>

            <table className="table w-75 mx-auto my-5">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>   
                    <th scope="col">Password</th>
                    <th scope="col"></th>
                    <th scope="col"></th>

                </tr>
            </thead>
            <tbody>
            

                {
                  
                  usuarios == undefined ? 
                  (<td className='alert alert-danger my-5 mx-auto w-50'>Erro ao acessar banco de dados</td>
                    
                  )
                  
                  : 
                  usuarios.map((usuario)=>(
                    <tr>
                        <th scope="row">{usuario.id}</th>
                        <td>{usuario.name}</td>
                        <td>{usuario.password}</td>
                        <Delete id={usuario.id} onClick={reset} />
                        <td style={{ fontSize: '24px' }}><IoIosAddCircle /></td>
                    </tr>
                )) 
                  
                }

              


            </tbody>
            </table>
        </>
    )
}

export default UsersList