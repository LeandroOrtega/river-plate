import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


const ItemDetailContainer = ({productos}) => {

const {id}= useParams();

const [producto,setProducto]=useState();
useEffect(()=>{
  productos.map((producto)=> {
  localStorage.setItem(producto,"producto");
  const prodd =JSON.stringify(producto) ;
  
  const prod1 = JSON.parse(prodd.id);
  console.log(prod1);
  setProducto(prod1.id)});},[]
)


  return (
   
<div>
  <h3>{producto}</h3>
    <h2>Detalle de producto</h2>
    
</div>

    )
    
}


export default ItemDetailContainer