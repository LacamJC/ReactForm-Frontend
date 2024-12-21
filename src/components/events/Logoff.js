function Logoff(){

    function handleChange(){
        localStorage.removeItem('Data')
        console.log("Deslogado")
        window.location.reload()
    }

    return(
        <>
            <input type="button" value="Sair" onClick={handleChange}></input>
        </>
    )
}

export default Logoff