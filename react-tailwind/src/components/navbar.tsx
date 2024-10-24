
import logo from '../assets/tree-trunk.png'
import NavItem from "./navitem"

interface Iprops {
    greet: string
}


function Navbar(props: Iprops){
    return(
        <div className="h-[80px] w-full bg-white text-black font-bold text-center flex justify-between box-border items-center py-[20px] border-b-2 border-gray-700">
            <img className="h-[40px]" alt="logo" src={logo}/>
            <NavItem/>
            <p className='px-[20px]'>Halo, {props.greet}</p>
        </div>
    )
}
export default Navbar