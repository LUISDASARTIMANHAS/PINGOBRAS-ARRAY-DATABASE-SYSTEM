const DB = localStorage.getItem("data");
const DBLogs = localStorage.getItem("logs");
const user = document.getElementById("user");
const senha = document.getElementById("senha");
const bio = document.getElementById("bio");
let data = ["No Data"]
let dataLogs = ["Inicialização"];

if(!DB || DB == "[]" || !DBLogs){
  logs("-------DATA-SYSTEM------")
  logs("Banco de dados Não implementado ou salvo!")
  logs("erro: " + DB)
}else{
   data = JSON.parse(DB)
  logs("Banco de dados carregado!")
  
}


function gerarDados(){
  let userData  = {
"usuario":user.value,
"senha":senha.value,
"bio":bio.value
}
  logs("Novo Dado Gerado")
  postData(userData)
}

function postData(item){
data.push(item)
readData()
  
let dataString = JSON.stringify(data)
localStorage.setItem("data",dataString);
logs("O dado foi salvo!")
}

function readData(){
  let dataString = JSON.stringify(data)
  let bytes = dataString.length
  let kBytes = (bytes/1000).toFixed(2)
  let mBytes = (kBytes/1000).toFixed(2)
  logs("Leitura de dados...")
  
  console.log("-------DATA-SYSTEM------");
  console.log("DATA: " + dataString);
  console.log("TAMANHO: " + data.length);
  console.log("TAMANHO(Bytes): " + bytes);
  console.log("TAMANHO(KB): " + kBytes);
  console.log("TAMANHO(MB): " + mBytes);
  
}
readData()

function logs(log){
  dataLogs.push(log);

  let dataLogsStr = JSON.stringify(dataLogs);
  localStorage.setItem("logs", dataLogsStr);
}