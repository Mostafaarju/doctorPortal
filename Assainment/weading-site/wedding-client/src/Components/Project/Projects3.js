import React from 'react';
import img from '../../images/01.jpg';

const Projects3 = () => {
  return (
    <div className='col-md-4 col-sm-6 col-12 card-item'>
      <img src={img} className='img-fluid' alt='' />
      <h2>Wedding Party</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum eligendi
        molestias magnam, consequuntur itaque autem neque ut ducimus facilis
        ratione.
      </p>
      <button className='btn btn-warning'>Enroll Now</button>
    </div>
  );
};

export default Projects3;
