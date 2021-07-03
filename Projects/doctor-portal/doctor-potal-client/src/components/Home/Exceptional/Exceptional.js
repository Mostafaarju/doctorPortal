import React from 'react';
import exceptional from '../../../images/exceptional.png';
import './Exceptional.css';

const Exceptional = () => {
  return (
    <section className='container'>
      <div className='row mt-5 pt-3'>
        <div className='col-md-5'>
          <img src={exceptional} className='img-fluid ' alt='' />
        </div>
        <div className='col-md-7 align-self-center'>
          <h2>
            Exceptional Dental <br /> Care, on Your Terms
          </h2>
          <p className='text-secondary fs-4 mt-5 py-4 '>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page{' '}
          </p>
          <button className='btn btn-bg mt-5'>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Exceptional;
