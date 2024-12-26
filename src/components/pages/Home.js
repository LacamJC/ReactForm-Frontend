import styles from '../../scss/components/Home.module.css'
import imgServer from '../../img/undraw_server_9eix.svg'
import Logoff from '../events/Logoff'
import imgClient from '../../img/undraw_online-resume_z4sp.svg'
function Home(){

    const user =  JSON.parse(localStorage.getItem('Data'))

    return(
        <>
            <main className="container .container-md py-5">

                {user ? (
                    <div className='alert alert-success w-50 mx-auto'>
                        <p className='text-center'>Olá {user.user} <Logoff st='btn btn-danger'/></p>
                    </div>
                ) : ""} 

                <div  className={styles.cardDivHome}>
                <h1 className="text-center">React Form</h1>
                <p>Este é um projeto simples de sistema de cadastro de usuarios utilizando <a href="https://www.alura.com.br/artigos/react-js?srsltid=AfmBOoqcHMYpxHneW_VMRM9e-pkiOUNDOxtc6mR_g-cp2ZwK9SCmA9jo" target='_blank' className={styles.link__dest}>React</a> para o <a href="https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end?srsltid=AfmBOoqZIg5muLcDE8hnM4uTwG_oLx-c6Rtwrg9jcJIGKpV_iSBvpQAn" target='_blank' className={styles.link__dest}>Frontend</a> e <a href="https://www.alura.com.br/artigos/node-js-definicao-caracteristicas-vantagens-usos?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=google&utm_medium=cpc&utm_content=703853654617&campaign_id=11384329873_164240702375_703853654617&utm_id=11384329873_164240702375_703853654617&hsa_acc=7964138385&hsa_cam=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&hsa_grp=164240702375&hsa_ad=703853654617&hsa_src=g&hsa_tgt=aud-527303763294:dsa-2276348409543&hsa_kw=&hsa_mt=&hsa_net=google&hsa_ver=3&gad_source=1&gclid=CjwKCAiAjp-7BhBZEiwAmh9rBVhrxNihP267lbGoW0OypcgyaPepJW2oeCIvfvrehr4dy4HMoRzsiRoCy_IQAvD_BwE" target='_blank' className={styles.link__dest}>nodeJS</a> para o <a href="https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end?srsltid=AfmBOoqZIg5muLcDE8hnM4uTwG_oLx-c6Rtwrg9jcJIGKpV_iSBvpQAn" target='_blank' className={styles.link__dest}>Backend</a>, integrado com uma api para as operações do Banco de Dados</p>
                </div>

                <article className={styles.cardDivBack}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2>Backend</h2>
                            <p>
                                O Server Side deste projeto, utiliza um servidor baseado em NodeJS com a biblioteca Sequelize para a integração de Banco de dados com o Client Side, executando operações como POST e GET para a inserção de novos usuarios e a recuperação dos existentes
                            </p>
                        </div>

                        <div className="col-12 col-md-6">
                            <img src={imgServer} className={styles.imgServer}></img>
                        </div>
                    </div>

                </article>

                <article className={styles.cardDivFront}>
                    <div className='row' >
                        
                        <div className='col-12 col-md-6'>
                            <h2>Frontend</h2>
                            <p>
                                O Client Side utiliza o Framework React para a criação de páginas dinâmicas e eficientes unindo JavaScript com HTML, e um formato chamado JSX, no qual o react utiliza para a criação de componentes Web para formulação de páginas. Junto do Framework css Bootstrap para a estilização pré formatada para o auxilio da criação da identidade visual
                            </p>
                        </div>
                        <div className='col-12 col-md-6' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={imgClient} className={styles.imgClient}></img>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

export default Home