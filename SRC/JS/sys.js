let data = []

function postData(item){
data.push(item)
readData()
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
  
}

function generateLinks(){
const fonte = "https://mods.factorio.com/mod/"


for(let i = 0; i < data.length; i++){
  
console.log(fonte + data[i])
}
}
