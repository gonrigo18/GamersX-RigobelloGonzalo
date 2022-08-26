import React from "react"
import { useEffect, useState } from "react"
import  RequestData  from "../../components/RequestData/RequestData.js"
import ItemList from "../../components/ItemlList/ItemList.js"
import "../ItemListContainer/ItemList.css"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
      RequestData()
          .then( (res) => {
              setProductos(res)
          })
          .catch( (error) => {
              console.log(error)
          })
          .finally(() => {
              // console.log("Fin del proceso")
          })
  }, [])


  return (
      <div>
          <ItemList productos={productos}/>
      </div>
  )
}

export default ItemListContainer