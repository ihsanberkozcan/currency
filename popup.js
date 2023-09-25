const dolar = document.querySelector("#dolar");
const euro = document.querySelector("#euro");
const altin = document.querySelector("#altin");
const bitcoin = document.querySelector("#bitcoin");

const fetchCurrency = async () => {
  const response = await fetch("https://api.genelpara.com/embed/doviz.json");
  const currency = await response.json();
  dolar.innerHTML = currency.USD.satis + " ₺";
  euro.innerHTML = currency.EUR.satis + " ₺";
  altin.innerHTML = currency.GA.satis + " ₺";
  bitcoin.innerHTML = "$ " + currency.BTC.satis;
};

fetchCurrency();
