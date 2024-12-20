import styles from '../../scss/Footer.module.css'
import ServerStatus from '../../scripts/ServerStatus'
function Footer(){
    return(
        <>
            <footer className={styles.footer} >
                <h5 className="text-center my-5">@copyright</h5>
                <ServerStatus/>
            </footer>
        </>
    )
}

export default Footer