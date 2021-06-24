import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';

const OrderList = () => {
  const [loggedinUser] = useContext(UserContext);
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    const user = { email: loggedinUser.email };
    fetch('https://agile-castle-83860.herokuapp.com/orderList', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => setOrderList(data));
  }, []);
  return (
    <div className='mainbody'>
      <table width='100%'>
        <thead>
          <tr>
            <td>Service</td>
            <td>Book For</td>
            <td>Order Time</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {orderList.map(order => {
            return (
              <tr>
                <td>{order.booking.service}</td>
                <td>{order.booking.date}</td>
                <td>{order.orderTime}</td>
                <td
                  style={{
                    color:
                      order.booking.status === 'Pending'
                        ? 'red'
                        : order.booking.status === 'Ongoing'
                        ? 'orange'
                        : 'green',
                  }}
                >
                  {order.booking.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
