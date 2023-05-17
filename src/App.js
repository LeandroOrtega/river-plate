import Navbar from "./components/navbar/Navbar"
import './App.css';
import Logo from "./components/logo/Logo";
import ItemList from "./components/itemlist/ItemList";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import CantidadProducto from "./components/CantidadProducto";


function App() {

 

  return (
    <BrowserRouter>

<CantidadProducto.Provider >
    <Logo/>
   
    <Navbar />
    <Routes>

    <Route path="/item-list" element= {<ItemList/>} />
    </Routes>
  
    </CantidadProducto.Provider>

    </BrowserRouter>
  );
}

export default App;
