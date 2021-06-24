import React, { useState } from 'react';

const Order = ({ order }) => {
  const [status, setStatus] = useState(order.booking.status);
  const handleStatus = e => {
    console.log('updating status..', e.target.value, order._id);
    setStatus(e.target.value);
    const newOrder = { status: e.target.value, id: order._id };
    fetch('https://agile-castle-83860.herokuapp.com/updateOrder', {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newOrder),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
  return (
    <tr>
      <td>{order.booking.service}</td>
      <td>{order.booking.email}</td>
      <td>{order.booking.date}</td>
      <td>{order.orderTime}</td>
      <td>
        <select
          style={{
            color:
              status === 'Pending'
                ? 'red'
                : status === 'Ongoing'
                ? 'orange'
                : 'green',
          }}
          onChange={handleStatus}
          name='status'
          id='status'
          defaultValue={status}
        >
          <option value='Pending'>Pending</option>
          <option value='Ongoing'>Ongoing</option>
          <option value='Done'>Done</option>
        </select>
      </td>
    </tr>
  );
};

export default Order;
