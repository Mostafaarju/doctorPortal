import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BookContext, UserContext } from '../../../../App';
import Payments from '../Payment/Payments';
const Book = () => {
  const [booking, setBooking] = useState(null);
  // test console
  console.log(booking);

  const [bookingState, setBookingState] = useState();
  const [loggedinUser] = useContext(UserContext);
  const [service] = useContext(BookContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    const newBooking = { ...data };
    newBooking.status = 'Pending';
    setBooking(newBooking);
  };

  const handlePayment = payment => {
    console.log(payment);
    const orderDetails = {
      booking: booking,
      payment: payment,
      orderTime: new Date().toDateString(),
    };
    console.log(orderDetails);
    fetch('https://agile-castle-83860.herokuapp.com/addBooking', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(orderDetails),
    })
      .then(res => res.json())
      .then(data => {
        data ? setBookingState(data) : setBookingState(false);
      });
  };

  return (
    <div className='mainbody'>
      <div
        className='booking-form'
        style={{ display: booking ? 'none' : 'block' }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Name:</p>
          <input
            type='text'
            defaultValue={loggedinUser.displayName}
            {...register('name')}
          />{' '}
          <br />
          <p>Email:</p>
          <input
            defaultValue={loggedinUser.email}
            {...register('email')}
          />{' '}
          <br />
          <p>Service:</p>
          <input
            defaultValue={service}
            type='text'
            {...register('service', { required: true })}
          />
          {errors.service && <span>This field is required</span>} <br />
          <p>Date:</p>
          <input type='date' {...register('date', { required: true })} /> <br />
          {errors.date && <span>This field is required</span>} <br />
          <input type='submit' value='Book Now' />
        </form>
      </div>
      <div style={{ display: booking ? 'block' : 'none' }}>
        <h2>Pay to confirm Your Booking</h2>
        <Payments handlePayment={handlePayment}></Payments>
      </div>
      {bookingState ? (
        <p style={{ color: 'green' }}>Booking sucessfull.</p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Book;
