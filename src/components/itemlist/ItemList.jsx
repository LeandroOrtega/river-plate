import { useContext, useEffect, useState} from "react"
import "./itemlist.css"
import CantidadProducto from "../CantidadProducto";
import { Link } from "react-router-dom";
import ItemDetailContainer from "../itemDetailContainer/ItemDetailContainer";









const ItemList = ({productos}) => {
 const {cantidad,setCantidad} = useContext(CantidadProducto);



return(
    productos.map((producto)=> 
    
    < div className="productos">
    <div >
    <Link to="/detail"className="card" onClick={()=>{localStorage.setItem(producto,"producto");
 const prodd =JSON.stringify(producto) ;
 
 const prod1 = JSON.parse(prodd);


 console.log(prod1);}}>
        
    <div >
    <h3> {producto.name}</h3>
 
    <img src={producto.img}alt="camiseta " className="img" />
    <p>Precio: $ {producto.precio}</p>
   
   
    </div>
    </Link>
    <button onClick={()=>{setCantidad(cantidad+1);
    
    }} >Agregar al carrito</button>
   
    
    </div>
    
    </div>
   
   
  )

)

 
}

export default ItemList
