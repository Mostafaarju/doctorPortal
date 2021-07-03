import React from 'react';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitenings from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
  {
    name: 'Fluoride Treatment',
    img: fluoride,
  },
  {
    name: 'Cavity Filling',
    img: cavity,
  },
  {
    name: 'Teath Whitening',
    img: whitenings,
  },
];

const Services = () => {
  return (
    <section className='container mt-5'>
      <div className='text-center'>
        <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
        <h2 style={{ color: '#203047' }}>Services We Provide</h2>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='w-75 row mt-5 pt-5'>
          {serviceData.map(service => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
