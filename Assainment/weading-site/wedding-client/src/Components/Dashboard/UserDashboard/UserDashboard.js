import React, { useState } from 'react';
import AddReview from './AddReview/AddReview';
// import { UserContext } from '../../../App';
import Book from './Book/Book';
import OrderList from './OrderList/OrderList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './UserDashboard.css';

library.add(fas);

const UserDashboard = () => {
  // const [loggedinUser] = useContext(UserContext)
  const [menu, setMenu] = useState('Book');
  const Visa = () => {
    return (
      <FontAwesomeIcon
        className='icon active-icon'
        icon={['fas', 'cc-visa']}
      ></FontAwesomeIcon>
    );
  };

  return (
    <main className='dashboard'>
      <div className='sidebar'>
        <li>
          <span onClick={() => setMenu('Book')}>
            <FontAwesomeIcon
              className='icon active-icon'
              icon={['fas', 'plus-square']}
            ></FontAwesomeIcon>
            Book
          </span>
        </li>
        <hr />
        <li>
          <span onClick={() => setMenu('Order')}>
            <FontAwesomeIcon
              className='icon active-icon'
              icon={['fas', 'cart-plus']}
            ></FontAwesomeIcon>
            Order List
          </span>
        </li>
        <hr />
        <li>
          <span onClick={() => setMenu('Review')}>
            <FontAwesomeIcon
              className='icon active-icon'
              icon={['fas', 'comment-dots']}
            ></FontAwesomeIcon>{' '}
            Add Review
          </span>
        </li>
        <hr />
      </div>
      <div className='body'>
        <h2>
          <Visa></Visa>
          {menu}
        </h2>
        {menu === 'Book' ? (
          <Book></Book>
        ) : menu === 'Order' ? (
          <OrderList></OrderList>
        ) : (
          <AddReview></AddReview>
        )}
      </div>
    </main>
  );
};

export default UserDashboard;
