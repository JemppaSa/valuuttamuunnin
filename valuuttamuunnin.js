
async function fetchData() {

    console.log("Fetching data!");
    

    try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD", {
            method: 'GET',
            
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        
    } catch (err) {
        console.error(err.message);
    }
}