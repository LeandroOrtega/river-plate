import "./itemlist.css"


const productos = [{name:"Camiseta titular",precio:"100", img:"codere-river.jpeg" },{name:"Pantalon", precio: 80, img:"codere-river.jpeg"},{name:"Campera", precio: 150, img:"codere-river.jpeg"}]


const ItemList = () => {

return(
    productos.map((producto)=> 
    
    < >
    <div className="productos">
        
    <div className="card">
    <h3> {producto.name}</h3>
 
    <img src={producto.img}alt="camiseta " className="img" />
    <p>Precio: $ {producto.precio}</p>
    </div>
    
    </div>
    </>
  )

)

 
}

export default ItemList