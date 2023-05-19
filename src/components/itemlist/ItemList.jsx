import { useContext} from "react"
import "./itemlist.css"
import CantidadProducto from "../CantidadProducto";






const productos = [{name:"Camiseta titular",precio:"100", img:"codere-river.jpeg" },{name:"Pantalon", precio: 80, img:"pantalon.jpg"},{name:"Campera", precio: 150, img:"codere-river.jpeg"}]


const ItemList = () => {
 const {cantidad,setCantidad} = useContext(CantidadProducto);


return(
    productos.map((producto)=> 
    
    < div className="productos">
    <div >
        
    <div className="card">
    <h3> {producto.name}</h3>
 
    <img src={producto.img}alt="camiseta " className="img" />
    <p>Precio: $ {producto.precio}</p>
   <button onClick={()=>{setCantidad(cantidad+1)}} >Agregar al carrito</button>
    
    </div>
    
    </div>
    
    </div>
   
  )

)

 
}

export default ItemList
