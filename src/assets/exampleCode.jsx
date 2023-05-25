const CryptoJS = require('crypto-js');
const publicKey = '63130446cb10477dcd18cf063ec936a0';
const privateKey = 'c00216892811acf1eca355428c57e5dbbae02e63';
const timestamp = new Date().getTime().toString();
const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();

const offset = 0;  // Número de resultados que deseas omitir al comienzo
const limit = 2;  // Cantidad máxima de resultados que deseas recibir

const url = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&offset=${offset}&limit=${limit}`;

async function FetchFunction() {
  const response = await fetch(url);

  const data = await response.json();
  console.log(url)
  console.log(data.data?.results);

  show(data.data?.results);
}

FetchFunction();

function show(data) {
  document.body.innerHTML = data.map((object) => {
    return `<p>${object.name}</p>`;
  }).join('');
}
