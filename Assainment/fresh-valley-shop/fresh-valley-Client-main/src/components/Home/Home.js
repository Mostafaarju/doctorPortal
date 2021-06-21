import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import PreLoader from '../PreLoader/PreLoader';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
  document.title = 'Fresh-Valley-Shop ';
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fierce-cliffs-17399.herokuapp.com/products')
      .then(res => res.json())
      .then(product => setProducts(product));
  }, []);
  return (
    <div>
      <div className='container'>
        <div className='Search'>
          <h3>Search for Products</h3>
          <input type='text' placeholder='Search' />
          <input type='submit' value='Search' />
        </div>
        <div className='Products'>
          {products.length === 0 && <PreLoader />}
          {products.map(product => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
