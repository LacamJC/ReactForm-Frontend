import UsersList from "../data/UsersList"
import styles from '../../scss/components/UsersList.module.css'
function ListaUsuario(){
    return(
        <>
            <h1 className="text-center my-5 px-3">Usuarios cadastrados no sistema</h1>
            <div className={styles._container}>
                
                <UsersList />
            </div>
        </>
    )
}

export default ListaUsuario