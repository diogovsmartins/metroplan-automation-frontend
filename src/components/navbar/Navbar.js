import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar(){
    return (<nav className="navbar">
        <ul className="nav-list">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/products" className="nav-item">Products</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
        </ul>
    </nav>);
}