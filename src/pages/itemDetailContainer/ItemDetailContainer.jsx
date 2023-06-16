
import { useParams } from "react-router-dom"
import "./itemDetail.css"
import { useContext, useEffect, useState } from "react";
import CantidadProducto from "../../components/CantidadProducto";
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
  const {cantidad,setCantidad} = useContext(CantidadProducto);
const [produ,setProdu]=useState({})
const {id} = useParams();
const [data,setData]= useState()
useEffect(()=>{
  const db = getFirestore();
  const itemsCollection = collection(db,"productos");
  getDocs(itemsCollection).then((querySnapshot)=>{
    const dataCollection = querySnapshot.docs.map((doc)=>doc.data())
  console.log(dataCollection);
    setData(dataCollection)
    const obtenerProdu = async ()=>{
      const produc =  await dataCollection.filter((prod)=>prod.id ==id);
  
      setProdu(...produc)
    }
    
    obtenerProdu()
    
  })
},[])
if(!data) return <p> Cargando...</p>
return(

 <div className="cardDetail">
   <h2>{produ.title}</h2>
  <img src={`/${produ.image}`} alt={produ.title} className="imgDetail"/>
  <p>{produ.description}</p>
  <h3>{produ.price}</h3>
  <button className="btnDetail" onClick={()=>{setCantidad(cantidad+1);
    
  }} >Agregar al carrito</button>
 
   </div>
  )
 
  

 
  
 
   
    
  
    
}



export default ItemDetailContainer