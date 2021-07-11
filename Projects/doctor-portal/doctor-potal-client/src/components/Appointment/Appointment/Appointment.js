import React, { useState } from 'react';
import Login from '../../Login/Login/Login';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  const handleDateChange = date => {
    setSelectDate(date);
  };

  return (
    <div>
      <Navbar></Navbar>
      <AppointmentHeader
        handleDateChange={handleDateChange}
      ></AppointmentHeader>
      <BookAppointment date={selectDate}></BookAppointment>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
