import React from 'react';

const Testimonial = props => {
  const { quote, name, from, img } = props.testimonial;
  return (
    <div className='card shadow-sm' style={{ width: '400px' }}>
      <div className='card-body px-4'>
        <p className='card-text text-center fs-3'>{quote}</p>
      </div>
      <div className='card-footer pb-4 d-flex  align-items-center justify-content-center'>
        <img className='mx-3' src={img} alt='' width='60' />
        <div>
          <h6 style={{ color: '#6acece' }}>{name}</h6>
          <p className='m-0'>{from}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
