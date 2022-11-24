import { Link } from "react-router-dom";
import './App.css';

export const Menu = () => {

    return (
        <ul className="menu-lista">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/pedir-cita" >Pedir Cita</Link></li>
        </ul>
    )
}