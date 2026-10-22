import {display} from './app.js'

export async function GetApi(url, amount) {
    try {
        fetch(url)
        .then(res => res.json())
        .then(data => createNewObj(data, amount))
    } catch(err) {
        console.error(err)
    }
    
}

function createNewObj (data, amount) {
        const result = data.results

        for(let i = 1; i <= amount; i++) {
            let newInd = i -1
            let newobj = {
                id: i,
                name: result[newInd].name,
                picture: `./yellow/${i}.png`
            }
                display(newobj)
            }
}