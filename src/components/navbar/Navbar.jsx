import { useContext, useState } from "react"
import CartWidget from "../CartWidget"
import ItemListContainer from "../itemlistcontainer/ItemListContainer"
import "./navbar.css"
import ItemList from "../../pages/itemlist/ItemList"
import { Link } from "react-router-dom"
import CantidadProducto from "../CantidadProducto"


const Navbar = () => {



  return (
  <>
  <nav className="nav">
  <Link style={{textDecoration: "none", color:"white"}} to="/item-list"  >{<ItemListContainer/>}</Link>
  <Link style={{textDecoration: "none", color:"white"}} to="/damas"  >Damas</Link>
    <a>Niños</a>
    <a>Hombres</a>
    
    <CartWidget />

  </nav>
  </>
  )
}

export default Navbar