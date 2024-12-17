 function getUserData(id){
    fetch("http://localhost:3001/getUsers", {
        method: "GET",
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('Dados coletados');
          console.log(data);
        })
        .catch(error => {
          console.error(`Erro: ${error}`);
        });
}

getUserData()