import {GetApi} from './GetApi.js'

let amount = 150;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${amount}`

const cont = document.querySelector("#pokecontainer")


GetApi(url, amount)



export function display(data) {
    console.log(data)
    const div = document.createElement("div")
    const p = document.createElement("p")
    const img = document.createElement("img")

    p.textContent = data.name
    img.src = data.picture

    div.append(img, p)
    cont.appendChild(div)
}