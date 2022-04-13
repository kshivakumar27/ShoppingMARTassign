import Card from './Card/Card';
import {useState} from 'react'
import './Products.css';

const Products = ({products, cartItems, setItems, setLength}) => {
    let tags = [...new Set(products.map(ele => ele.tag))];
    let [updatedProducts, setUpdates] = useState(products);  
    let [currentTag, setTag] = useState('');  
    let productsCopy = JSON.parse(JSON.stringify(updatedProducts));

    const handleSort = (e) =>{
        switch(e.currentTarget.value){
            case "ASC": productsCopy.sort((a, b) =>{
                                            return a.price - b.price;
                                        });
                                        setUpdates(productsCopy);
                                        break;
            case "DSC": productsCopy.sort((a, b) =>{
                                            return b.price - a.price;
                                        });
                                        setUpdates(productsCopy);
                                        break;
            case "clear":   setUpdates(products);
                            break;      
            default: break;
        }
    }

    const handleFilter = (e, tag) => {
        setTag(tag);
        if(tag === "CLEAR"){
            setLength(products.length);
            setUpdates(products);
            return;
        }
        let filtered = products.filter(item => (item.tag === tag ? true: false));
        setUpdates(filtered);
        setLength(filtered.length);
    }

    return ( 
        <div className="grid-container">
            <div className="options">
                <div className="filter-bar">
                    <p className="filters">FILTERS: </p>
                    <ul className="filter-options">
                        {tags.map((tag, index) => (
                            <li key={index} className={tag === currentTag ? "option active": "option"} onClick={(e) => handleFilter(e, tag)}> {tag} </li>
                        ))}
                        <li key='clear' className="option" onClick={(e) => handleFilter(e, 'CLEAR')}> CLEAR ALL </li>
                    </ul>
                </div>
                <div className="sort-options">
                    <select onChange={(e)=>{handleSort(e)}}>
                        <option disabled selected className="sort-option" >Sort By</option>
                        <option value="ASC" className="sort-option" >Low to High</option>
                        <option value="DSC" className="sort-option" >High to Low</option>
                        <option value="clear" className="sort-option"> Clear Sort </option>
                    </select>
                </div>
            </div>
            <div className="grid">
                {updatedProducts.map(product => (
                    <Card key={product.id} product={product} cartItems={cartItems} setItems={setItems}/>
                ))}
            </div>
        </div>
     );
}
 
export default Products;