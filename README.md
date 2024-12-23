# React Form 


## O que é ? 
<p>
    Uma aplicação React, junto a um servidor Node.js com banco de dados MySQL, apresenta um sistema CRUD que se comunica com um servidor no backend. A conexão com o banco de dados é feita utilizando a biblioteca Sequelize para operações e o Express para a criação do servidor Node.js.
</p>

## Funcionalidades
- CRUD de usuarios
- Conexão com o banco de dados
- Verificação de conexão com o servidor
- Notificação de erros no Frontend sem quebrar a aplicação para o usuario


## Fluxo de dados

### Cadastro
<p>
O usuário preenche o formulário e, por meio de uma requisição Fetch, envia os dados para a API do banco de dados. Nessa etapa, são realizadas validações tanto no frontend quanto no backend para evitar possíveis erros. Caso todas as verificações sejam aprovadas, o usuário é cadastrado no banco de dados.
</p>

### Login
<p>
Após o usuário preencher o formulário de login, os dados são enviados para o servidor. Lá, é realizada uma verificação para confirmar se o usuário existe e se as credenciais estão corretas. Caso a autenticação seja bem-sucedida, o servidor retorna um JSON contendo as informações do usuário, como ID e nome, que são armazenadas no LocalStorage para manter o usuário logado. Após o login, o usuário pode acessar a lista de usuários. Se tiver permissão, visualizará todos os usuários cadastrados; caso contrário, visualizará apenas as suas próprias informações.
</p>


### Logout
<p>
O logout ocorre exclusivamente no cliente, onde os dados do usuário são removidos do localStorage e a página é recarregada.
</p>

### Lista de usuarios
<p>
Após o login, o usuário poderá acessar a lista de usuários. Essa lista é carregada a partir de uma requisição ao servidor, que retorna os dados dos usuários de acordo com as permissões do usuário logado. Se o usuário tiver permissão, verá a lista completa; caso contrário, verá apenas suas próprias informações.
</p>


####
[Github do backend](https://github.com/Dex209/backend.git)
