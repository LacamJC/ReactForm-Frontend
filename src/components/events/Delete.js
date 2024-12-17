import { IoIosCloseCircleOutline } from "react-icons/io"
function Delete({ id }){

    
    async function deleteUser() {
        try{
            let idNum = (id).toString()
            const response = await fetch(`http://localhost:3001/deleteUser/${idNum}}`,{
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