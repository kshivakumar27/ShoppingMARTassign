import Header from  '../Header/Header';
import Info from './InfoSection/Info';

import {useState} from 'react';
import {CartContext} from '../Context/CartContext';
import Products from './ProductsSection/Products';
import Cart from './ProductsSection/Cart/Cart';
import './Main.css';

const Main = ({data}) => {

    const [isCartOpen, setCartOpen] = useState(false);
    const [cartItems, setItems] = useState([]);
    const [length, setLength] = useState(data.length);

    const getLength = (value) => {
        setLength(value);
    }

    return ( 
        <CartContext.Provider value={{cartItems, setItems, isCartOpen, setCartOpen}}>
            <div className="main">
                <Header />
                <Cart />
                
                <div className="block">
                    <div className="container">
                        <Info length={length} />
                        <Products products={data} setLength={getLength}/>
                    </div>
                </div>
                
            </div>
        </CartContext.Provider>
     );
}
 
export default Main;