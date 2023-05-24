import {doc, getDoc, getFirestore} from "firebase/firestore"
import { useEffect, useState } from "react"

const Data = () => {

useEffect (()=>{
    const db = getFirestore();
    const camiseta = doc(db,"productos", "GB1ss89He2RRtzyGCnDV");
getDoc(camiseta).then()
console.log(camiseta);
},[]

)
   
  return (
    <div>Data</div>
  )
}

export default Data