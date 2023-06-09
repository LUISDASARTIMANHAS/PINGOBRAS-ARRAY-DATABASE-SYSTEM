const DB = localStorage.getItem("data");
const DBLogs = localStorage.getItem("logs");
const inputDel = document.getElementById("find")
const dadoSelect = document.getElementById("dadoSelect")
const dadoPos = document.getElementById("dadoPos")
let data = ["No Data"]
let dataLogs = ["Inicialização"];
inputDel.addEventListener("keyup", atualizar);

if(!DB || DB == "[]" || !DBLogs){
  console.log("-------DATA-SYSTEM------")
  console.log("Banco de dados Não implementado ou salvo!")
  console.log("erro: " + DB)
}else{
   data = JSON.parse(DB)
  console.log("Banco de dados carregado!")
  
}

function removeData(){
  const posicao = inputDel.value
  let select = JSON.stringify(data[posicao])
  
  if(data.length == 1){
    logs("<err> Impossível deletar: Deve existir pelo menos 1 usuario no Banco de Dados")
  }else if(posicao > -1){
    let deletedDb = data.splice(posicao, 2);
    console.log(deletedDb)
    let dataString = JSON.stringify(deletedDb)
    logs("Item deletado: "+select)
    alert("Item deletado: "+select)
    
  localStorage.setItem("data",dataString);
  readData()
  }else{
    logs("<err> Impossível deletar: "+ select +" Não Encontrado no banco de dados")
  }
}

function readData(){
  let dataString = JSON.stringify(data)
  let bytes = dataString.length
  let kBytes = (bytes/1000).toFixed(2)
  let mBytes = (kBytes/1000).toFixed(2)
  
  
  console.log("-------DATA-SYSTEM------");
  console.log("DATA: " + dataString);
  console.log("TAMANHO: " + data.length);
  console.log("TAMANHO(Bytes): " + bytes);
  console.log("TAMANHO(KB): " + kBytes);
  console.log("TAMANHO(MB): " + mBytes);
}
readData()

function atualizar(){
  const inputDel = document.getElementById("find")
  const posicao = inputDel.value
  dadoSelect.innerHTML = JSON.stringify(data[posicao])
  if(posicao == -1){
    dadoPos.innerHTML = "Sem Dados"
  }else{
    dadoPos.innerHTML = posicao;
  }
}

function logs(log){
  dataLogs.push(log);

  let dataLogsStr = JSON.stringify(dataLogs);
  localStorage.setItem("logs", dataLogsStr);
}