
import { useParams } from "react-router-dom"
import "./itemDetail.css"
import { useContext } from "react";
import CantidadProducto from "../CantidadProducto";

const ItemDetailContainer = ({productos}) => {
  const {cantidad,setCantidad} = useContext(CantidadProducto);

const {id} = useParams();
  const data = productos
 const resultado = data.filter(producto=> producto.id == id)
console.log(id);

return(
 resultado.map((produ)=>
 <div className="cardDetail">
   <h2>{produ.name}</h2>
  <img src={`/${produ.img}`} alt={produ.name} className="imgDetail"/>
  <p>{produ.description}</p>
  <h3>{produ.precio}</h3>
  <button className="btnDetail" onClick={()=>{setCantidad(cantidad+1);
    
  }} >Agregar al carrito</button>
 
   </div>
  )
  

 ) 
  
 
   
    
  
    
}


export default ItemDetailContainer