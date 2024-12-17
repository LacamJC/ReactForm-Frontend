import UsersList from "../data/UsersList"

function ListaUsuario(){
    return(
        <>
            
            <div className="container">
                <h1 className="text-center my-5">Usuarios cadastrados no sistema</h1>
                <UsersList />
            </div>
        </>
    )
}

export default ListaUsuario