import React from 'react';
import stock from "../../data/DataContainer.js"

const RequestData = () => {

    return new Promise( (resolve, reject) => {
        // cuerpo de la promesa
        setTimeout(() => {
            resolve(stock)
        }, 1000)
    } )
}



// setTimeout(() => {
//     if (param) {
//         resolve("Promesa resuelta")
//     } else {
//         reject("Promesa rechazada")
//     }
// }, 3000)

export default RequestData;