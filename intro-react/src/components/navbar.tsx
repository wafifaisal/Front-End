import "./navbar.css"
import NavItem from "./navitem"
import logo from '../assets/tree-trunk.png'

interface Iprops {
    greet: string
}


function Navbar(props: Iprops){
    return(
        <div className="navbar">
            <img alt="logo" src={logo} className="logo"/>
            <NavItem/>
            <p>Halo, {props.greet}</p>
        </div>
    )
}
export default Navbar