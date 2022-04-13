import {useState, useContext} from 'react';
import {CartContext} from '../../../Context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Card.css';

const Card = ({product}) => {

    const {cartItems, setItems} = useContext(CartContext);

    const increamentItem = 1;
    const [variant, setVariant] = useState(null);
    const {options} = product;

    const notify = () => {
        toast.success('You have items in your Cart!',{
            className:'toast-shadow',
            closeOnClick:true,
            pauseOnHover:false
        });
    }
    const warn = () => {
        toast.info('Select a Variant!',{
            className:'toast-shadow',
            closeOnClick:true,
            pauseOnHover:false
        });
    }
    const handleVariant = (e, id) => {
        let option = {
            option_id: id,
            variant: e.value
        };
        setVariant(option);
    }

    const addItems = (id) => {
        if(variant === null){
            warn();
            return;
        }
        const exists = cartItems.find(item => item.id === id && item.variant.variant === variant.variant );
        if(exists){
            let Obj = Object.assign({}, exists);
            Obj.quantity += 1;
            let newCart = cartItems.map(item => {
                return (item.id === id && item.variant.variant === variant.variant ? Obj: item);
            })
            setItems(newCart);
        }
        else{
            let cart = [...cartItems]
            let item = {
                id: product.id, 
                name:`${product.name}`,
                price: `${product.price}`,
                img: `${product.image_src[0]}`,
                variant: variant,
                quantity: increamentItem
            }
            cart.push(item)
            setItems(cart);
        }
        notify();
    }

    return ( 
        <div className="card" >
            <ToastContainer limit={3} position="bottom-right" closeOnClick pauseOnHover/>
            <img src={product.image_src[0]} alt={product.name}
            className='product-image'/>
            <div className="product-info">
                <div className="vendor"> {product.vendor} </div>
                <div className="name"> {product.name} </div>
                <div className="price"> 
                <span className='off-price'>${product.price} </span><span className="original"> ${product.compare_at_price} </span><span className="off-percent">{Math.trunc((product.price / product.compare_at_price) * 100)}%OFF</span>  
                </div>
                <div className="variants">
                    <ul className="variants-list" >
                        {options.map(option => (
                            <li key={option.id} className="variant">
                                <input type="radio" name='variant' value={option.value} className='variant-option' id={option.value} onChange={(e) => handleVariant(e.target, option.id)}/>
                                <label htmlFor={option.value} className='variant-label'> {option.value} </label >
                            </li>
                        ))}
                    </ul>
                    <div className="btn-cart">
                        <a href="#cart" className="cart" onClick={ () => addItems(product.id)} >Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Card;

