let data = []
const DB = localStorage.getItem("data");
const labelTam = document.getElementById("size");
const labelDat = document.getElementById("data");
const labelBytes = document.getElementById("sizeBytes");
const labelKB = document.getElementById("sizeKB");
const labelMB = document.getElementById("sizeMB");
const user = document.getElementById("user");
const senha = document.getElementById("senha");
const bio = document.getElementById("bio");
let dataString = JSON.stringify(data)

if(!DB){
  console.log("-------DATA-SYSTEM------")
  console.log("erro: Não implementado ou salvo!")
  console.log("erro: " + DB)
}else{
   data = JSON.parse(DB)
  
}

function gerarDados(user,senha,bio){
  let userData  = {
"usuario":user,
"semha":senha,
"bio":bio
}
  postData(userData)
}


function postData(item){
data.push(item)
readData()
  
let dataString = JSON.stringify(data)
localStorage.setItem("data",dataString);
}

function removeData(item){
item = data.indexOf(item);
if (item > -1) {
  data.splice(item, 0);
}
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
  
  labelTam.innerHTML = data.length
  labelDat.innerHTML = dataString
  labelBytes.innerHTML = bytes
  labelKB.innerHTML = kBytes
  labelMB.innerHTML = mBytes
}
readData()
