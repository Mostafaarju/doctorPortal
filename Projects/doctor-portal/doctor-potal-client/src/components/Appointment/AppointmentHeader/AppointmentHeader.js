import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/Chair.png';
import './AppointmentHeader.css';

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main className='container '>
      <div
        style={{ height: '600px' }}
        className='row d-flex align-items-center '
      >
        <div className='col-md-4 offset-md-1'>
          <h1>Appointment </h1>
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className='col-md-6'>
          <img src={chair} className='img-fluid' alt='' />
        </div>
      </div>
    </main>
  );
};

export default AppointmentHeader;
