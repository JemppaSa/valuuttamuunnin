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

    let valueDollar = value/fromRatio;
    document.getElementById("result").value = (valueDollar*toRatio).toFixed(2)
}
//fetchData()