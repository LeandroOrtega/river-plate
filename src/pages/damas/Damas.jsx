import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CantidadProducto from "../../components/CantidadProducto";


const Damas = () => {
    const {cantidad,setCantidad} = useContext(CantidadProducto);
    const [produ,setProdu]=useState([])
    const {damas} = useParams();
    console.log(damas);
    const [data,setData]= useState()
    useEffect(()=>{
      const db = getFirestore();
      const itemsCollection = collection(db,"productos");
      getDocs(itemsCollection).then((querySnapshot)=>{
        const dataCollection = querySnapshot.docs.map((doc)=>doc.data())
      console.log(dataCollection);
        setData(dataCollection)
        const obtenerProdu = async ()=>{
          const produc =  await dataCollection.filter((prod)=>prod.categoryId ==damas);
      
          setProdu(produc)
          console.log(produc);
        }
        
        obtenerProdu()
        
      })
    },[])
    if(!data) return <p> Cargando...</p>
    return(
    produ.map((produ)=>
     <div className="cardDetail">
       <h2>{produ.title}</h2>
      <img src={`/${produ.image}`} alt={produ.title} className="imgDetail"/>
      <p>{produ.description}</p>
      <h3>{produ.price}</h3>
      <button className="btnDetail" onClick={()=>{setCantidad(cantidad+1);
        
      }} >Agregar al carrito</button>
     
       </div>)
      )
     
      
    
     
      
     
       
        
      
        
}

export default Damas