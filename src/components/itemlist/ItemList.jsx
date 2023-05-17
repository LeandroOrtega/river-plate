import { useContext, useState } from "react"
import "./itemlist.css"
import CantidadProducto from "../CantidadProducto"




const productos = [{name:"Camiseta titular",precio:"100", img:"codere-river.jpeg" },{name:"Pantalon", precio: 80, img:"pantalon.jpg"},{name:"Campera", precio: 150, img:"codere-river.jpeg"}]


const ItemList = () => {
  const [cantidad, setCantidad] = useState(0)

  const agregar =()=>{
    setCantidad(cantidad+1)
  }
 


return(
    productos.map((producto)=> 
    
    < >
    <div className="productos">
        
    <div className="card">
    <h3> {producto.name}</h3>
 
    <img src={producto.img}alt="camiseta " className="img" />
    <p>Precio: $ {producto.precio}</p>
   <button onClick={agregar}>Agregar al carrito</button>
    <span>{cantidad}</span>
    </div>
    
    </div>
    </>
  )

)

 
}

export default ItemList
