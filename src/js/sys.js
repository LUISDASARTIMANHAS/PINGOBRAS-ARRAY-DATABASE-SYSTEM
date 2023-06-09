const DB = localStorage.getItem("data");
var DBLogs = localStorage.getItem("logs");
let data = [];
let dataLogs = ["Inicialização"];

const labelTam = document.getElementById("size");
const labelDat = document.getElementById("data");
const labelLogs = document.getElementById("labelLogs");
const labelBytes = document.getElementById("sizeBytes");
const labelKB = document.getElementById("sizeKB");
const labelMB = document.getElementById("sizeMB");

if (!DB || !DBLogs) {
  console.log("-------DATA-SYSTEM------");
  console.log("Banco de dados Não implementado ou salvo!");
  console.log("erro: " + DB);
} else {
  data = JSON.parse(DB);
  dataLogs = JSON.parse(DBLogs);
  console.log("Banco de dados carregado!");
}

function readData() {
  let dataString = JSON.stringify(data);
  let bytes = dataString.length;
  let kBytes = (bytes / 1000).toFixed(2);
  let mBytes = (kBytes / 1000).toFixed(2);
  logs("Leitura de dados...");

  console.log("-------DATA-SYSTEM------");
  console.log("DATA: " + dataString);
  console.log("TAMANHO: " + data.length);
  console.log("TAMANHO(Bytes): " + bytes);
  console.log("TAMANHO(KB): " + kBytes);
  console.log("TAMANHO(MB): " + mBytes);

  labelTam.innerHTML = data.length;
  labelDat.innerHTML = dataString;
  labelBytes.innerHTML = bytes;
  labelKB.innerHTML = kBytes;
  labelMB.innerHTML = mBytes;
  labelLogs.innerHTML = dataLogs;
}
readData();

function logs(log) {
  dataLogs.push(log);

  let dataLogsStr = JSON.stringify(dataLogs);
  localStorage.setItem("logs", dataLogsStr);
}
