
import {CartContext} from '../../Context/CartContext';
import {useContext, useState} from 'react';
import {FaUserAlt, FaSearch, FaShoppingCart, FaAngleDown} from 'react-icons/fa';
import logo from '../../../Media/logo.jpg'
import './Nav.css'

const Nav = () => { 

    const {cartItems, isCartOpen, setCartOpen} = useContext(CartContext)
    const [isCollapse, setCollapse] = useState(false);
    const handleCart = () => {
        setCartOpen(!isCartOpen);
    }
    const handleCollapse = () => {
        setCollapse(!isCollapse);
    }

    let total = 0;
    if(cartItems.length !== 0){
        total = cartItems.reduce( (sum, item ) => {
            return sum + item.quantity;
        }, 0)
    }
    return ( 
        <nav className='navbar'>
            <div className="logo"> </div>
            <ul className={isCollapse?'nav-list list-close':'nav-list list-open'}>
                <li className='list-elements'>
                    <a href="#home"> <span className="shop-dropdown">Shop <FaAngleDown/></span> </a>
                    <a href="#home">About Us</a>
                    <a href="#home">Our Stores</a>
                    <a href="#home">Contact Us</a>
                </li>
            </ul>
            <div className="helper">
                <div className="search-field">
                    <input type="text" placeholder="Search" /> 
                    <FaSearch className='icon-search'/>
                </div>
                <div className='profile'> <FaUserAlt/> </div>
                <div className='cart-icon' onClick={handleCart} > 
                    < FaShoppingCart/> 
                    <div className={cartItems.length > 0 ? 'cart-value' : 'cart-empty'} > {total} </div>
                </div>
                <div className={isCollapse?"collapse-menu open":"collapse-menu"} onClick={handleCollapse}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
     );
}
 
export default Nav;