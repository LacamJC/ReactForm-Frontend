import styles from '../../scss/components/Home.module.css'
import imgServer from '../../img/undraw_server_9eix.svg'
import imgClient from '../../img/undraw_online-resume_z4sp.svg'
function Home(){

    const user =  JSON.parse(localStorage.getItem('Data'))

    return(
        <>
            <main className="container .container-md py-5">

                

                <div  className={styles.cardDivHome}>
                <h1 className="text-center">React Form</h1>
                <p>Este é um projeto simples de sistema de cadastro de usuarios utilizando <a href="" className={styles.link__dest}>React</a> para o <a href="" className={styles.link__dest}>Frontend</a> e <a href="#" className={styles.link__dest}>nodeJS</a> para o <a href="" className={styles.link__dest}>Backend</a>, integrado com uma api para as operações do Banco de Dados</p>
                </div>

                <article className={styles.cardDivBack}>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <h2>Backend</h2>
                            <p>
                                O Server Side deste projeto, utiliza um servidor baseado em NodeJS com a biblioteca Sequelize para a integração de Banco de dados com o Client Side, executando operações como POST e GET para a inserção de novos usuarios e a recuperação dos existentes
                            </p>
                        </div>

                        <div className="col-12 col-md-8">
                            <img src={imgServer} className={styles.imgServer}></img>
                        </div>
                    </div>

                </article>

                <article className={styles.cardDivFront}>
                    <div className='row' >
                        
                        <div className='col-12 col-md-4'>
                            <h2>Frontend</h2>
                            <p>
                                O Client Side utiliza o Framework React para a criação de páginas dinâmicas e eficientes unindo JavaScript com HTML, e um formato chamado JSX, no qual o react utiliza para a criação de componentes Web para formulação de páginas. Junto do Framework css Bootstrap para a estilização pré formatada para o auxilio da criação da identidade visual
                            </p>
                        </div>
                        <div className='col-12 col-md-8' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={imgClient} className={styles.imgClient}></img>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

export default Home