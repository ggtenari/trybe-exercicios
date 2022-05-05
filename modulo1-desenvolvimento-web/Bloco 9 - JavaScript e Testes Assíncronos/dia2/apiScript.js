const foreach = (dados) => {
  const dadosFilter = dados.filter((dado) => dado.rank <= 100)
  dadosFilter.forEach((moeda) => {
    let moedaLista = document.createElement('li')
    moedaLista.innerText = `${moeda.id} (${moeda.symbol}): ${moeda.priceUsd}`
    document.querySelector('#lista').appendChild(moedaLista)
    console.log(moeda.id);
  })
}


const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets'

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error))
}

fetchCoins()

// id: 'bitcoin',
//       rank: '1',
//       symbol: 'BTC',
//       name: 'Bitcoin',
//       supply: '19021875.0000000000000000',
//       maxSupply: '21000000.0000000000000000',
//       marketCapUsd: '747269842825.6128044230959375',
//       volumeUsd24Hr: '12906375015.0698784217898102',
//       priceUsd: '39284.7625602424999861',
//       changePercent24Hr: '-1.2363792642140740',
//       vwap24Hr: '38916.4398122229314041',
//       explorer: 'https://blockchain.info/'