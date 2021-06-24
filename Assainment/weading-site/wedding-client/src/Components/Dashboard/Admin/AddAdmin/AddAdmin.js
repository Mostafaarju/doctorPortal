import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddAdmin = () => {
  const [admin, setAdmin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    fetch('https://agile-castle-83860.herokuapp.com/addAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => setAdmin(data));
  };
  return (
    <div className='mainbody'>
      <h3>Enter Email of The New Admin</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input width='400px' type='email' {...register('email')} /> <br />
        {errors.date && <span>This field is required</span>} <br />
        <input className='btn btn-warning' type='submit' value='Add Admin' />
      </form>
      {admin ? (
        <p style={{ color: 'green' }}>Admin added sucessfully</p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default AddAdmin;
