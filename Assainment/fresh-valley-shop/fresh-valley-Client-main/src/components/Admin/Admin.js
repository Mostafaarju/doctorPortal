import {
  faBox,
  faPen,
  faPlus,
  faUserLock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Admin.css';
require('dotenv').config();

const Admin = () => {
  document.title = 'Add Products - Fresh-Valley-Shop';
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [upProductImg, setUpProductImg] = useState('');
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();
  const onSubmit = data => {
    const eventData = {
      name: data.name,
      price: data.price,
      weight: data.weight,
      productIMG: upProductImg,
    };
    const url = 'https://fierce-cliffs-17399.herokuapp.com/addProduct';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          history.push('/');
        }
      });
  };

  const handleProductImageUpload = event => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', 'edec117c64f7cb23b0587d873428dc5f');
    imageData.append('image', event.target.files[0]);

    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setUpProductImg(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className='container'>
      <div className='Dashborad'>
        <ul>
          <li>
            <Link to='/addAdmin'>
              <span>
                <FontAwesomeIcon icon={faUserLock} />
              </span>{' '}
              Add Admin
            </Link>
          </li>
          <li>
            <Link to='/admin'>
              <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>{' '}
              Add Product
            </Link>
          </li>
          <li>
            <Link to='/manage_products'>
              <span>
                <FontAwesomeIcon icon={faBox} />
              </span>{' '}
              Manage Product
            </Link>
          </li>
          <li>
            <Link to='/manage_products'>
              <span>
                <FontAwesomeIcon icon={faPen} />
              </span>{' '}
              Edit Product
            </Link>
          </li>
        </ul>
      </div>
      <div className='ProductOptions'>
        <div className='PageTitle'>
          <h3>Add Your Product</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='FormDesign'>
            <label htmlFor='ProductName'>Product Name</label>
            <br />
            <input
              className='InputText'
              id='ProductName'
              name='name'
              placeholder='Green Capsicum - 250 gm'
              ref={register({ required: true })}
            />
            <p className='ErrorMSG'>
              {errors.name && <span>This field is required</span>}
            </p>
          </div>
          <div className='FormDesign'>
            <label htmlFor='ProductPrice'>Product Price</label>
            <br />
            <input
              className='InputText'
              id='ProductPrice'
              name='price'
              placeholder='25'
              ref={register({ required: true })}
            />
            <br />
            <p className='ErrorMSG'>
              {errors.price && <span>This field is required</span>}
            </p>
          </div>
          <div className='FormDesign'>
            <label htmlFor='ProductWeight'>Product Weight</label>
            <br />
            <input
              className='InputText'
              id='ProductWeight'
              name='weight'
              placeholder='500 gm'
              ref={register({ required: true })}
            />
            <br />
            <p className='ErrorMSG'>
              {errors.weight && <span>This field is required</span>}
            </p>
          </div>
          <div className='FormDesign'>
            <label htmlFor='ProductImage'>Product Image</label>
            <br />
            <input
              className='InputText'
              id='ProductImage'
              name='exampleRequired'
              type='file'
              onChange={handleProductImageUpload}
            />
          </div>
          <br />
          <div className='ImageUploadPreview'>
            {upProductImg ? (
              <div className='Deff'>
                <img src={upProductImg} alt='Upload Success' />
                <p>Upload Success</p>
              </div>
            ) : (
              <div className='Deff'>
                <img
                  src='https://i.ibb.co/S7bxDjK/img-Preview.png'
                  alt='No Image Uploaded Yet'
                />
                <p>No Image Uploaded Yet</p>{' '}
              </div>
            )}
          </div>
          <input className='InputSubmit' type='submit' value='Add Product' />
        </form>
      </div>
    </div>
  );
};

export default Admin;
