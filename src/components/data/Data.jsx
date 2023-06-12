import {collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore"
import { useEffect, useState } from "react";


const Data = () => {
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

    




  if(!data) return <p> Cargando</p>
  return (
    <>
    
    {data.map((producto)=>(
      <>
      <p>{producto.title}</p>
      <img src={producto.image} alt="campera" />
      </>
    )
    )}
    </>
  )
  
}

export default Data