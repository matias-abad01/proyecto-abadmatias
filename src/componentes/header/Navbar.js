import logo from '../../assets/imglogo.png'
import './Navbar.css';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <header>
            <div className="menu">
                <div className="logo">
                    <img src={logo} alt="" />   
                </div>
                <nav className="links">
                    <ul>
                        <li className='inicio'><a href="/">inicio</a></li>
                        <li><a href="/">productos</a></li>
                        <li><a href="/">preguntas frecuentes</a></li>
                        <li><a href="/">contacto</a></li>
                    </ul>
                </nav>
                <CartWidget />
                <div className="boton">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px"  viewBox="0 0 45 29" enable-background="new 0 0 45 29">
                        <g>
                        <line fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" x1="1.5" y1="4.5" x2="44" y2="4"/>
                        </g>
                        <g>
                        <line fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" x1="1.3" y1="14.8" x2="43.8" y2="14.3"/>
                        </g>
                        <g>
                        <line fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" x1="1.3" y1="24.8" x2="43.8" y2="24.3"/>
                        </g>
                    </svg>
                </div>
            </div>    
        </header>
    );
}

export default Navbar;