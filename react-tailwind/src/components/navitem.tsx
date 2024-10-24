import { NavLink } from 'react-router-dom';


function NavItem(){
    return(
        <div className="flex box-border mx-[30px] text-[black] font-bold text-[15px] border-none bg-none">
        <NavLink 
        className={({ isActive }) => isActive ? 'font-bold cursor-pointer translate-y-[-2px] bg-yellow-500 rounded-lg px-2 py-1'  : ' hover:font-bold hover:cursor-pointer hover:underline hover:translate-y-[-2px]'}  style={{ marginRight: '100px' }} to={'/'} >Home</NavLink>
        <NavLink 
        className={({ isActive }) => isActive ? 'font-bold cursor-pointer translate-y-[-2px] bg-yellow-500 rounded-lg px-2 py-1'  : ' hover:font-bold hover:cursor-pointer hover:underline hover:translate-y-[-2px]'}  style={{ textAlign:'center'}} to={'/about'}>About</NavLink>
        <NavLink 
        className={({ isActive }) => isActive ? 'font-bold cursor-pointer translate-y-[-2px] bg-yellow-500 rounded-lg px-2 py-1'  : ' hover:font-bold hover:cursor-pointer hover:underline hover:translate-y-[-2px]'} style={{ marginLeft: '100px'}} to={'/contact'}>Contact</NavLink>
        </div>
    )
}
export default NavItem