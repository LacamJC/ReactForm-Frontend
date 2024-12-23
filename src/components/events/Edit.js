import { IoIosCloseCircleOutline, IoIosAddCircle } from "react-icons/io";
import url from '../../data/url.json'
import { useNavigate } from "react-router-dom";

function Edit({id}){
    const user = JSON.parse(localStorage.getItem('Data'))
    console.log(user)
    
    const navigate = useNavigate()
    async function EditUser(){
        console.log(`Editando dados do usuario ${id}`)
        
        navigate(`/EditUser/${id}`)
    }
    

    return(
        <>
            <td style={{ fontSize: '24px' }} onClick={EditUser}><IoIosAddCircle /></td>
        </>
    )
}

export default Edit