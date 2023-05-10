import Navbar from "./components/navbar/Navbar"
import './App.css';
import Logo from "./components/logo/Logo";
import ItemList from "./components/itemlist/ItemList";
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>

    <Logo/>
    <Navbar />
    <Routes>
    <Route path="/item-list" element= {<ItemList />} />
    </Routes>
   

    </BrowserRouter>
  );
}

export default App;
