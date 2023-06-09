const DB = localStorage.getItem("data");
const inputDel = document.getElementById("inputDel")
const dadoSelect = document.getElementById("dadoSelect")
let data = []
inputDel.addEventListener("keyup", atualizar);

if(!DB){
  console.log("-------DATA-SYSTEM------")
  console.log("erro: Não implementado ou salvo!")
  console.log("erro: " + DB)
}else{
   data = JSON.parse(DB)
  
}

function removeData(search){
  let select = JSON.stringify(data[search])
  let posicao = data.indexOf(data[search]);
  if (posicao > -1) {
    data.splice(posicao, 1);
    console.log("Item deletado: "+select)
    alert("Item deletado: "+select)
    
  }else{
    console.error("<err> Impossível deletar: "+ select +" Não Encontrado no banco de dados")
  }
  let dataString = JSON.stringify(data)
  localStorage.setItem("data",dataString);
  readData()
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
  const inputDel = document.getElementById("inputDel")
  const search = inputDel.value
  dadoSelect.innerHTML = JSON.stringify(data[search])
  return search
}
