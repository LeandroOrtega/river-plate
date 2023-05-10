import CartWidget from "../CartWidget"
import ItemListContainer from "../itemlistcontainer/ItemListContainer"
import "./navbar.css"


const Navbar = () => {
  return (
  <>
  <nav className="nav">
    <ItemListContainer text="Todos los productos"/>
    <a>Damas</a>
    <a>Niños</a>
    <a>Hombres</a>
    <CartWidget/>

  </nav>
  </>
  )
}

export default Navbar