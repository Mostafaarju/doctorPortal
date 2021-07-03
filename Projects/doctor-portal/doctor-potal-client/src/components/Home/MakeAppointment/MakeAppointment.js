import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
  return (
    <section className='make-appointment'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5'>
            <img src={doctor} className='img-fluid' alt='' />
          </div>
          <div className='col-md-7 text-white py-5 custom'>
            <h5 className='text-uppercase '>Appointment</h5>
            <h1 className='my-4 text-white'>
              Make an Appointment <br /> Today
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!
            </p>
            <button className='btn btn-bg mt-4'>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
