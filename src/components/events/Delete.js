import { IoIosCloseCircleOutline } from "react-icons/io"
import url from '../../data/url.json'
function Delete({ id }){
    
    
    const user = JSON.parse(localStorage.getItem('Data'))
    async function deleteUser() {
        try{
            let idNum = (id).toString()
            const response = await fetch(`${url.url}/deleteUser/${idNum}}`,{
                method: 'DELETE',
             
                }

                
            )
            const data = await response.json();
            console.log(data)
            console.log("Delete enviado com sucess:" +data.message)
            console.log(`Id do usuario: ${user.id}`)
            if(data.delete == true && user.id == idNum )
            {
                console.log("Apagando proprio usuario")
                localStorage.removeItem('Data')
                window.location.reload()
            }
  
            
        }catch(err){
            console.log(`Erro: ${err}
                        id: ${id}
                `)
        }
    }


    return(
        <>
            <td onClick={deleteUser} style={{ fontSize: '24px' }}><IoIosCloseCircleOutline/></td>
        </>
    )
}

export default Delete