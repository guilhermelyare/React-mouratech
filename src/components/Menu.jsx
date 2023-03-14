import { NavLink } from "react-router-dom";

function Menu(){
    return (
        <nav className="bg-white h-8 px-4">
            <ul className="h-8 flex gap-4">
                <li>
                    <NavLink to='/login' className="hover:underline">
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="hover:underline">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Exemplo1' className="hover:underline">
                        Exemplo1
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;