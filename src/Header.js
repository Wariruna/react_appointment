import { Link } from 'react-router-dom';
import logo from './logo.png';

export const Header = () => {

    return (
        <header>    
            <img className="logo" src={logo} alt="Centro de Belleza 5 sentidos" />
            <h1>5 Sentidos Alicante</h1>
        </header>


    )
}