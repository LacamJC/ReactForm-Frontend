import {useEffect, useState} from 'react'
import styles from '../../scss/components/UsersList.module.css'
import { IoIosCloseCircleOutline, IoIosAddCircle } from "react-icons/io";
import Delete from '../events/Delete';
import url from '../../data/url.json'
function UsersList(){
    const [usuarios, setUsuarios] = useState([])
    const [erro, setErro] = useState(false)
    const user = JSON.parse(localStorage.getItem('Data'))
    console.log(user ? "SIM" : "NAO")
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

    function getUser(){
      // console.log(user)

      if(user){
        fetch(`${url.url}/getUser/${user.id}`, {
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
          setUsuarios(data)
          console.log(`Dados do usuario: ${usuarios}`)
          setErro(false)
        })
        .catch(error =>{
          console.log("Erro"  + error)
          setErro(false)
        })
      }
      else{
        console.log("Usuario nao logado")
      }

    }

    function getAllUsers(){


      if(user)
      {
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
            
            setUsuarios(data);
            console.log(data);
            setErro(false)
          })
          .catch(error => {
            console.error(`Erro: ${error}`);
            setErro(false)
          });
      }else{
        console.log("Usuario nao logado")
      }
      
    }

    useEffect(()=>{
        
      if(user)
      {
        console.log(`Usuario: ${user.hasPermission}`)
        if(user.hasPermission)
        {
          console.log("Usuario possui permissao administrativa")
          getAllUsers()
        }else{
          console.log("Usuario nao possui permissoes administrativas")
          getUser()
        }
      }
      else{
        console.log("Por favor faça login para continuar")
      }
        

        
    }, [])

    return(
        <>

            <table className={styles.table}>
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
            

              
                {/* {
                  
                  usuarios == undefined ? 
                  (<td className='alert alert-danger my-5 mx-auto w-50'>Erro ao acessar banco de dados</td>
                    
                  )
                  
                  : 
                  usuarios.map((usuario)=>(
                    <tr className={styles.tableRow}>
                        <th scope="row">{usuario.id}</th>
                        <td className={styles.tableName}>{usuario.name}</td>
                        <td className={styles.tablePassword}>{usuario.password}</td>
                        <Delete id={usuario.id} onClick={reset} />
                        <td style={{ fontSize: '24px' }}><IoIosAddCircle /></td>
                    </tr>
                )) 
                  
                } */}

                {/* {user.hasPermission ? 
                
                  
                  
                    usuarios == undefined ? 
                    (<td className='alert alert-danger my-5 mx-auto w-50'>Erro ao acessar banco de dados</td>
                      
                    )
                    
                    : 
                    usuarios.map((usuario)=>(
                      <tr className={styles.tableRow}>
                          <th scope="row">{usuario.id}</th>
                          <td className={styles.tableName}>{usuario.name}</td>
                          <td className={styles.tablePassword}>{usuario.password}</td>
                          <Delete id={usuario.id} onClick={reset} />
                          <td style={{ fontSize: '24px' }}><IoIosAddCircle /></td>
                      </tr>
                  )) 
                    
                  
                
                :
                 (
                 <tr className={styles.tableRow}>
                  <th scope="row">{usuarios.id}</th>
                  <td className={styles.tableName}>{usuarios.name}</td>
                  <td className={styles.tablePassword}>{usuarios.password}</td>
                  <Delete id={usuarios.id} onClick={reset} />
                  <td style={{ fontSize: '24px' }}><IoIosAddCircle /></td>
                 </tr>
            )} */}
              
              {user ?
                  user.hasPermission ? 
                    usuarios == undefined ?
                    (<td className='alert alert-danger my-5 mx-auto w-50'>Erro ao acessar banco de dados</td>
                      
                    )

                    :

                    usuarios.map((usuario)=>(
                      <tr className={styles.tableRow}>
                          <th scope="row">{usuario.id}</th>
                          <td className={styles.tableName}>{usuario.name}</td>
                          <td className={styles.tablePassword}>{usuario.password}</td>
                          <Delete id={usuario.id} onClick={reset} />
                          <td style={{ fontSize: '24px' }}><IoIosAddCircle /></td>
                      </tr>
                  )) 

                  :

                  (
                    <tr className={styles.tableRow}>
                     <th scope="row">{usuarios.id}</th>
                     <td className={styles.tableName}>{usuarios.name}</td>
                     <td className={styles.tablePassword}>{usuarios.password}</td>
                     <Delete id={usuarios.id} onClick={reset} />
                     <td style={{ fontSize: '24px' }}><IoIosAddCircle /></td>
                    </tr>
               )

              
              : (<p className='alert alert-warning'>Faça login para acessar os dados </p>)}


            </tbody>
            </table>
        </>
    )
}

export default UsersList