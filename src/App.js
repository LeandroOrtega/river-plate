import Navbar from "./components/navbar/Navbar"
import './App.css';
import Logo from "./components/logo/Logo";
import ItemList from "./components/itemlist/ItemList";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import CantidadProducto from "./components/CantidadProducto";
import { useState } from "react";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Data from "./components/data/Data";



function App() {
  const productos = [{name:"Camiseta titular",precio:"100", img:"codere-river.jpeg",id:155 },{name:"Pantalon", precio: 80, img:"pantalon.jpg",id:1688},{name:"Campera", precio: 150, img:"codere-river.jpeg"}]

  const [cantidad,setCantidad] = useState(0)
  

  return (
    <BrowserRouter>

<CantidadProducto.Provider value = {{cantidad,setCantidad}}>
    <Logo/>
   
    <Navbar />
   {/* <Data/> */}
    <Routes>
      <Route>
    <Route path="/item-list" element= {<ItemList productos={productos}/>} />
  <Route path="/detail/:id" element= {<ItemDetailContainer productos={productos} />}/>
    </Route>
    </Routes>
  
    </CantidadProducto.Provider>

    </BrowserRouter>
  );
}

export default App;
