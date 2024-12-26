import styles from '../../scss/layout/Header.module.css'

function Logoff({st}){

    function handleChange(){
        localStorage.removeItem('Data')
        console.log("Deslogado")
        window.location.reload()
    }

    return(
        <>
            <input type="button" value="Sair" onClick={handleChange} className={`${styles.btn} ${st}`}></input>
        </>
    )
}

export default Logoff