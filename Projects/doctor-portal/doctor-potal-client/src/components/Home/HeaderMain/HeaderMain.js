import React from 'react';
import chair from '../../../images/Chair.png';
import './HeaderMain.css';

const HeaderMain = () => {
  return (
    <main className='container '>
      <div
        style={{ height: '600px' }}
        className='row d-flex align-items-center '
      >
        <div className='col-md-4 offset-md-1'>
          <h1>
            Your New Smile <br /> Starts Hears
          </h1>
          <p className='text-secondary'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            architecto modi quisquam dignissimos mollitia repellendus?
          </p>
          <button className='btn btn-bg'>Get Appointment</button>
        </div>
        <div className='col-md-6'>
          <img src={chair} className='img-fluid' alt='' />
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
