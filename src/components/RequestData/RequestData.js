import {data} from "../../data/data"

export const requestData = () => {
    return new Promise( (resolve, reject) => {
            // cuerpo de la promesa
            setTimeout(() => {
                resolve(data)
            }, 1000)
        } )
}