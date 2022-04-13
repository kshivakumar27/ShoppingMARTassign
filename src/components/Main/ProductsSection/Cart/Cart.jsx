import {CartContext} from '../../../Context/CartContext';
import {useContext} from 'react';
import empty from '../../../../Media/empty.png';
import './Cart.css';

const Cart = () => {
    const {cartItems, setItems, isCartOpen, setCartOpen} = useContext(CartContext);
    
    const handleClose = () => {
        setCartOpen(!isCartOpen);
    }
    
    const handleClear = () => {
        setItems([]);
    }
    
    const handleInc = (item) => {
        let Obj = Object.assign({}, item);
        Obj.quantity += 1;
        let newCart = cartItems.map(old => {
            return (old.name === item.name && old.variant.variant === item.variant.variant ? Obj : old)
        })
        setItems(newCart);
    }
    const handleDec = (item) => {
        let Obj = Object.assign({}, item);
        Obj.quantity -= 1;
        if(Obj.quantity > 0){
            let newCart = cartItems.map(old => {
                return (old.name === item.name && old.variant.variant === item.variant.variant ? Obj : old)
            })
            setItems(newCart);
        }
        else{
            let newCart = cartItems.filter(old => {
                if(old.name === item.name && old.variant.variant === item.variant.variant){
                    return false;
                }
                else{return true}
            })
            setItems(newCart)
        }
}
    
    const generateCart = () => (
        <> 
                <div className="cart-bar-items">
                    {cartItems.map(item => (
                        <div key={item.variant.option_id} className="cart-bar-item">
                            <img preload="true" src={item.img} alt={item.name} className="cart-bar-img"/>
                            <div className="cart-bar-info">
                                <div className="cart-bar-name">{item.name}</div>
                                <div className="cart-bar-variant">{item.variant.variant}</div>
                                <div className="cart-bar-price">${item.price}</div>
                                <div className="quantity-btn">
                                    <p className="quantity-tag">Quantity: </p>
                                    <div className="quantity reduce" onClick={() => handleDec(item)}> - </div>
                                    <div className="quantity value"> {item.quantity} </div>
                                    <div className="quantity increase" onClick={() => handleInc(item)}> + </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cta-btns">
                    <div className="clear-cart" onClick={handleClear}>CLEAR CART</div>
                    <div className="proceed-btn">PROCEED</div>
                </div>
            </>
    )

    return ( 
        <div className={isCartOpen?'cart-bar open': 'cart-bar close'}>
            <div className="close-cart" onClick={handleClose} > X </div>
            <div className="cart-head">
                <h4>Items in your Cart</h4>
            </div>
            
            {cartItems.length === 0 ? <div className="empty">
                <img src={empty} alt="empty-img" className="empty-img"/>
                <div className="empty-info">Wow! Such Empty.</div>
            </div> : generateCart()}
        </div>
     );
}
 
export default Cart;