import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className='contact my-5 py-5'>
      <div className='container'>
        <div className='section-header text-center text-white mb-5'>
          <h5 className='fs-3 text-uppercase' style={{ color: '#6acece' }}>
            Contact
          </h5>
          <h1 className='text-white'>Always connect with us</h1>
        </div>
        <div className='col-md-9 mx-auto'>
          <form action=''>
            <div className='form-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Email Address *'
              />
            </div>
            <div className='form-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Subject *'
              />
            </div>
            <div className='form-group mb-3'>
              <textarea
                name=''
                className='form-control'
                id=''
                cols='30'
                rows='10'
                placeholder='Message *'
              ></textarea>
            </div>
            <div className='form-group mb-3 text-center'>
              <button type='button' className='btn btn-bg'>
                {' '}
                Submit{' '}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
