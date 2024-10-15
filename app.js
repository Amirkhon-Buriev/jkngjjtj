let otadiv = document.getElementById('ota')

function getData(params) {
    params.map((item) => {

        let div = document.createElement('div')
        let rasimi = document.createElement('img')
        let nomi = document.createElement('h3')
        let narxi = document.createElement('p')

        rasimi.src = item.image
        nomi.innerHTML = item.title
        narxi.innerHTML = `<b>Narxi:</b>` + item.price + '$'

        div.appendChild(rasimi)
        div.appendChild(nomi)
        div.appendChild(narxi)
        div.classList.add('card')
        ota.appendChild(div)
    })
}

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => getData(data))