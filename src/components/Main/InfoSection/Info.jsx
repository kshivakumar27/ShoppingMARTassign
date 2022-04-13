import './Info.css'

const Info = ({length}) => {
    return ( 
        <div className="Info-bar">
            <ul className="page-nav">
                <li>Home</li>
                <li>Clothing</li>
                <li>Mens Clothing</li>
                <li>All Mens Clothing</li>
            </ul>
            <h5 className='count'>All Products(<span className='products'>{length} Products</span>)</h5>
        </div>
     );
}
 
export default Info;
