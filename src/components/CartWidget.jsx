import { useContext } from "react"
import carrito from "./img/carrito.png"
import CantidadProducto from "./CantidadProducto"

const CartWidget = () => {

  const cantidad = useContext(CantidadProducto)
  return (
    <div>
        <img src={carrito} alt="carrito" />
        <span></span>
    </div>
  )
}

export default CartWidget