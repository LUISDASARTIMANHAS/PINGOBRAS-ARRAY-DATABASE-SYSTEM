let data = []
const DB = localStorage.getItem("data");
const labelTam = document.getElementById("size");
const labelBytes = document.getElementById("sizeBytes");
const labelKB = document.getElementById("sizeKB");
const labelMB = document.getElementById("sizeMB");
let dataString = JSON.stringify(data)

if(!DB){
  console.log("-------DATA-SYSTEM------")
  console.log("erro: Não implementado ou salvo!")
  console.log("erro: " + DB)
}else{
   data = JSON.parse(DB)
  
}

function gerarDados(){
  let userData  = {
"usuario":"LUIS DAS ARTIMANHAS",
"idade":18,
"semha":"1234",
"bio":"Gosto de longas caminhadas na praia. sigame para mais informações"
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
  data.splice(item, 1);
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
  labelBytes.innerHTML = bytes
  labelKB.innerHTML = kBytes
  labelMB.innerHTML = mBytes
}
readData()
