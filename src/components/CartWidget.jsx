import carrito from "./img/carrito.png"

const CartWidget = () => {
  return (
    <div>
        <img src={carrito} alt="carrito" />
        <span>2</span>
    </div>
  )
}

export default CartWidget