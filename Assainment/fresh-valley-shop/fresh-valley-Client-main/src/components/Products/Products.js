import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import './Products.css';


const Products = ({product}) => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, price, productIMG, _id, weight }  = product;
    const buyProduct = () => {
        history.push(`/checkout/${_id}`);
    }
    return (
        <>
            <div className="SingleProduct">
                <div className="ProductImage">
                    <img src={productIMG} alt={name} />
                </div>
                <div className="ProductName">
                    <h3>{name} - {weight}</h3>
                </div>
                <div className="ProductInfo">
                    <div className="ProductPrice">
                        <h3>৳ {price}</h3>
                    </div>
                    <div className="BuyProduct">
                        <button onClick={buyProduct}>Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;