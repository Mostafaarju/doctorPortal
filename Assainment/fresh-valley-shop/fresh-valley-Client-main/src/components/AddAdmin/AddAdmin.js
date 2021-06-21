import React, { useState } from 'react';

const AddAdmin = () => {
  const [admin, setAdmin] = useState({
    email: '',
  });
  const handleBlur = e => {
    const newAdmin = { ...admin };
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin);
  };

  const handleAdmin = () => {
    const newAdmin = { ...admin };

    fetch('https://fierce-cliffs-17399.herokuapp.com/addAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newAdmin),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('admin add Successfully');
        }
      });
  };

  return (
    <div className='d-flex justify-content-center'>
      <h2>Add Admin</h2>
      <div className='input-group mb-3 input-group-lg '>
        <input
          type='text'
          className='form-control'
          placeholder='Email'
          aria-label="Recipient's username"
          aria-describedby='button-addon2'
          onBlur={handleBlur}
        />
        <button
          onClick={handleAdmin}
          className='btn btn-outline-secondary'
          type='button'
          i
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddAdmin;
