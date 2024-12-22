import { IoIosCloseCircleOutline } from "react-icons/io"
import url from '../../data/url.json'
function Delete({ id }){
    

    
    async function deleteUser() {
        try{
            let idNum = (id).toString()
            const response = await fetch(`${url.url}/deleteUser/${idNum}}`,{
                method: 'DELETE',
             
                }

                
            )
            const data = await response.json();
            console.log("Delete enviado com sucess:" +data)
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