const dollar = document.querySelector("#dollar");
const euro = document.querySelector("#euro");
const gold = document.querySelector("#gold");
const bitcoin = document.querySelector("#bitcoin");

const dollarChangeRate = document.querySelector("#dollar-change-rate");
const euroChangeRate = document.querySelector("#euro-change-rate");
const goldChangeRate = document.querySelector("#gold-change-rate");
const bitcoinChangeRate = document.querySelector("#bitcoin-change-rate");

const fetchCurrency = async () => {
  const response = await fetch("https://api.genelpara.com/embed/doviz.json");
  const currency = await response.json();
  dollar.innerHTML = currency.USD.satis + " ₺";
  euro.innerHTML = currency.EUR.satis + " ₺";
  gold.innerHTML = currency.GA.satis + " ₺";
  bitcoin.innerHTML = "$ " + currency.BTC.satis;

  dollarChangeRate.innerHTML = `<div class=${currency.USD.d_yon}>%${currency.USD.degisim}</div>`;
  euroChangeRate.innerHTML = `<div class=${currency.EUR.d_yon}>%${currency.EUR.degisim}</div>`;
  goldChangeRate.innerHTML = `<div class=${currency.GA.d_yon}>%${currency.GA.degisim}</div>`;
  bitcoinChangeRate.innerHTML = `<div class=${currency.BTC.d_yon}>%${currency.BTC.degisim}</div>`;
};

setInterval(fetchCurrency, 1000);
