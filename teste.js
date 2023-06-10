const DB = localStorage.getItem("data")
const dataDelete = {
    "user": "LUIS DAS ARTIMANHAS",
    "senha":"1234"
  }
const dataBase = JSON.parse(DB)

console.log("Banco de dados: "+ JSON.stringify(dataBase))
console.log("Dados a serem deletados: "+ JSON.stringify(dataDelete))

dataBase.forEach((item) =>verificar(item))

function verificar(item){
  if (dataDelete.user == item.usuario && dataDelete.senha == item.senha) {
    //definindo usuario valido
   let userEncontrado = {
      user: item.usuario,
      senha: item.senha
    }
    console.log(userEncontrado)
    return userEncontrado 
}else{
  console.log("Dados Não encontrados no banco de dados")
}
  
}