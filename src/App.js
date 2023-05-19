import Navbar from "./components/navbar/Navbar"
import './App.css';
import Logo from "./components/logo/Logo";
import ItemList from "./components/itemlist/ItemList";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import CantidadProducto from "./components/CantidadProducto";
import { useState } from "react";



function App() {

  const [cantidad,setCantidad] = useState(0)
  

  return (
    <BrowserRouter>

<CantidadProducto.Provider value = {{cantidad,setCantidad}}>
    <Logo/>
   
    <Navbar />
   
    <Routes>
<Route>
    <Route path="/item-list" element= {<ItemList/>} />
  
    </Route>
    </Routes>
  
    </CantidadProducto.Provider>

    </BrowserRouter>
  );
}

export default App;
