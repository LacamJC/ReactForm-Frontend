const express= require('express')
const server = express()
const bd_users = require('./database/bd_users')
const cors = require('cors')
const bodyParser = require('body-parser')
var port = 3001

server.use(express.json())
server.use(cors())
server.use(bodyParser.urlencoded({extended:false}))

server.get('/', (req,res)=>{
    res.send('Olá bem vindo ao servidor backend')
})

server.get('/getUsers', async (req,res)=>{
    bd_users.findAll({})
    .then(user =>{
        console.log("Usuarios encontrados")
        console.log(user)

        const jsonData = user.map(user => user.get({plain:true}));
        console.log(JSON.stringify(jsonData, null, 2));
        res.send(jsonData);
    })
    .catch(err =>{
        console.log("Erro ao procurar usuarios")
        console.log(err)
    })
})

server.post('/cadUsers', async(req,res)=>{
    console.log("Cadastrando usuarios")
    const user = {
        name : req.body.name,
        password : req.body.password
    }

    console.log(user)

    bd_users.create({
        name : user.name ,
        password : user.password
    })
    .then(()=>{
        console.log("Usuario cadastrado com sucesso")
    })
    .catch(err =>{
        console.log(`Erro ao cadastrar usuario: ${err}`)
    })
})

server.delete("/deleteUser/:id", async(req,res)=>{
    console.log("Deletando usuario")
    let id = req.params.id
    console.log(`Usuario com id: ${id}`)


    bd_users.destroy({
        where: {id : id}
    })
    .then(()=>{
        console.log("Usuario deletado")
    })
    .catch(err =>{
        console.log(`Erro ao deletar usuario: ${err}`)
    })
})

server.post('/verifyUser', async(req,res)=>{
    console.log("Verificando usuario")
    const user = {
        name : req.body.name,
        password : req.body.password
    }

    console.log(user)

    try {
        
        bd_users.findOne({where : {name : user.name, password : user.password}})
        .then(user =>{
            if(user){
                console.log("Usuario encontrado")
                res.status(200).send({ message: 'Login successful' , user: `${user.name}`})
            }
            else{
                console.log("Usuario nao encontrado")
            }
        })
        .catch(err=>{
            console.log(`Erro ao consultar banco de dados  ${err}`)
        })
    }
    catch{
        console.log("erro")
    }
})

server.listen(port,  ()=>{
    console.log("Server open ")
})