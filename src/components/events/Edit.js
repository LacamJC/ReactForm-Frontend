import { IoIosCloseCircleOutline, IoIosAddCircle } from "react-icons/io";
import url from '../../data/url.json'
import { useNavigate } from "react-router-dom";
import styles from '../../scss/components/UsersList.module.css'

function Edit({id}){
    const user = JSON.parse(localStorage.getItem('Data'))
    // console.log(user)
    
    const navigate = useNavigate()
    async function EditUser(){
        console.log(`Editando dados do usuario ${id}`)
        
        navigate(`/EditUser/${id}`)
    }
    

    return(
        <>
            <td style={{ fontSize: '24px' }} onClick={EditUser} title="Editar Dados" ><IoIosAddCircle className={styles.btnEsc} /></td>
        </>
    )
}

export default Edit