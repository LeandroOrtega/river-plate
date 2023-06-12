import Navbar from "./components/navbar/Navbar"
import './App.css';
import Logo from "./components/logo/Logo";
import ItemList from "./components/itemlist/ItemList";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import CantidadProducto from "./components/CantidadProducto";
import { useState } from "react";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Formulario from "./components/formularioCompra/Formulario";
import Data from "./components/data/Data";
// import Data from "./components/data/Data";



function App() {
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const productos = [{name:"Camiseta titular",precio:"100", img:"codere-river.jpeg",id:155, description: `${description}` },{name:"Pantalon", precio: 80, img:"pantalon.jpg",id:1688, description: `${description}`},{name:"Campera", precio: 150, img:"campera.png", id:1231, description: `${description}`}]

  const [cantidad,setCantidad] = useState(0)
  

  return (
    <BrowserRouter>

<CantidadProducto.Provider value = {{cantidad,setCantidad}}>
    <Logo/>
   
    <Navbar />
    <Formulario/>
   {/* <Data/> */}
    <Routes>
      <Route>
    <Route path="/item-list" element= {<ItemList productos={productos}/>} />
  <Route path="/detail/:id" element= {<ItemDetailContainer productos={productos} />}/>
    </Route>
    </Routes>
  <Data/>
    </CantidadProducto.Provider>

    </BrowserRouter>
  );
}

export default App;
