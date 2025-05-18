const nConversão = document.querySelector(".converter")
const currencySelect = document.querySelector(".currency-selec")

async function converter() {
    const InputValue = document.querySelector(".number").value /* valor digitado, real */
    const valueConvert = document.querySelector(".currency-value") /* real */
    const valueConverted = document.querySelector(".currency-converted") /* valor convertido, dolar */
    
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then( response => response.json() )
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const btcToday = data.BTCBRL.high
    const libraToday = data.GBPBRL.high

    valueConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(InputValue)
    
    if (currencySelect.value == "Dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(InputValue / dolarToday)
        
    }
    if (currencySelect.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(InputValue / euroToday)
        
    }
    if (currencySelect.value == "BTC") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(InputValue / btcToday)
        
    }
    if (currencySelect.value == "Libra") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(InputValue / libraToday)
        
    }
    
}

function changeCurrency() {
    const changeText = document.getElementById("currency-name")
    const changeImage = document.querySelector(".image")

    if (currencySelect.value == "Dolar") {
        changeImage.src = "img/US.png"
        changeText.innerHTML = "Dólar americano"
    }

    if (currencySelect.value == "euro") {
        changeText.innerHTML = "Euro"
        changeImage.src = "img/euro.png"
    }
    if (currencySelect.value == "Libra") {
        changeText.innerHTML = "Libras"
        changeImage.src = "img/libra.png"
    }
    if (currencySelect.value == "BTC") {
        changeText.innerHTML = "Bitcoin"
        changeImage.src = "img/bitcoin.png"
    }
    converter()

}

currencySelect.addEventListener("change", changeCurrency)