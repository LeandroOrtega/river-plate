import {collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore"
import { useContext, useEffect, useState } from "react";
import CantidadProducto from "../CantidadProducto";
import { Link } from "react-router-dom";


const Data = () => {
  const {cantidad,setCantidad} = useContext(CantidadProducto);

const [data,setData]= useState()
useEffect(()=>{
  const db = getFirestore();
  const itemsCollection = collection(db,"productos");
  getDocs(itemsCollection).then((querySnapshot)=>{
    const dataCollection = querySnapshot.docs.map((doc)=>doc.data())
  console.log(dataCollection);
    setData(dataCollection)

  })
},[])

    

console.log(data);


  if(!data) return <p> Cargando...</p>
  return (
    
    data.map((producto)=> 
    
    < div className="productos">
    <div >
    <Link to ={`/detail/${producto.categoryId}`} className="card" onClick={()=>{localStorage.setItem(producto,"producto");
 const prodd =JSON.stringify(producto) ;
 
 const prod1 = JSON.parse(prodd);
 console.log(prod1.name);}}>
        
    <div >
    <h3> {producto.title}</h3>
    
 
    <img src={producto.image}alt="camiseta " className="img" />
    <p>Precio: $ {producto.price}</p>
   
   
    </div>
    </Link>
    <button onClick={()=>{setCantidad(cantidad+1);
    
    }} >Agregar al carrito</button>

    
    </div>
    
    </div>
  )
  )
  
}

export default Data