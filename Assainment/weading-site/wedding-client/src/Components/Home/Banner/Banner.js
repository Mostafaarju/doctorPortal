import React from 'react';
import wedding3 from '../../../images/03.jpg';

const Banner = () => {
  return (
    <div className='banner bg-dark text-white'>
      <div className='row'>
        <div className='col-md-5 col-sm-12 header-info'>
          <h1>Wedding Photographer</h1>
          <h3></h3>
          <p class='fs-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className='btn btn-primary'>Explore Service</button>
        </div>
        <div className='col-md-7 col-sm-12'>
          <img className='w-100' src={wedding3} alt='' />
        </div>
      </div>
      {/* <Carousel></Carousel> */}
    </div>
  );
};

export default Banner;
