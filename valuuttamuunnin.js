let data

async function fetchData() {
    console.log("Fetching data!");
    try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD", {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        data = await response.json();
        document.getElementById("paivitetty").innerHTML = "Päivitetty viimeksi: " + new Date(data.time_last_update_utc).toLocaleString()
        console.log(data);
    } catch (err) {
        console.error(err.message);
    }
}
function laske() {
    const currencyFrom = document.getElementById("currencyFrom")
    const currencyTo = document.getElementById("currencyTo")
    const fromRatio = data.rates[currencyFrom.value]
    const toRatio = data.rates[currencyTo.value]
    const value = document.getElementById("value").value

    const valueDollar = value/fromRatio;
    const result = (valueDollar*toRatio).toFixed(2)
    document.getElementById("result").value = result
    document.getElementById("teksti").innerHTML = value + " " + currencyFrom.value + " on " + result + " " + currencyTo.value
}
//fetchData()
