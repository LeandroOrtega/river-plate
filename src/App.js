import Navbar from "./components/navbar/Navbar"
import './App.css';
import Logo from "./components/logo/Logo";
import ItemList from "./components/itemlist/ItemList";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import CantidadProducto from "./components/CantidadProducto";
import { useState } from "react";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";



function App() {
  const productos = [{name:"Camiseta titular",precio:"100", img:"codere-river.jpeg" },{name:"Pantalon", precio: 80, img:"pantalon.jpg"},{name:"Campera", precio: 150, img:"codere-river.jpeg"}]

  const [cantidad,setCantidad] = useState(0)
  

  return (
    <BrowserRouter>

<CantidadProducto.Provider value = {{cantidad,setCantidad}}>
    <Logo/>
   
    <Navbar />
   
    <Routes>
      <Route>
    <Route path="/item-list" element= {<ItemList productos={productos}/>} />
  <Route path="/detail" element= {<ItemDetailContainer />}/>
    </Route>
    </Routes>
  
    </CantidadProducto.Provider>

    </BrowserRouter>
  );
}

export default App;
