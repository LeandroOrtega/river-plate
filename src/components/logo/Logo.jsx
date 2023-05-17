import { Link } from "react-router-dom"
import "./logo.css"



const Logo = ()=>{
    return (
        <Link style={{textDecoration: 'none', color: "black"}} to="/" >
        <h1 className="logo">
        La Casa de River Plate
        </h1>
       
            
        </Link>
    
    )
}
export default Logo;