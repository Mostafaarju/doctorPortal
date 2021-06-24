import React from 'react';
import detective from '../../../images/detective.jpg'
import bodyguard from '../../../images/bodyguard.jpg'

const Carousel = () => {
    return (
        <div id="carousel" className='carousel slide carousel-fade' data-bs-ride="carousel">
            <div className="carousel-inner" style={{ maxHeight: '90vh' }}>
                <div className="d-flex carousel-item active">
                    <div>
                        <h2>Solve a mystery with our inteligent Detective</h2>
                        <button>Learn More</button>
                    </div>
                    <img className='d-block w-50 h-78' src={detective} alt="" />
                </div>
                <div className="carousel-item ">
                    <img className='d-block w-100 h-78' src={bodyguard} alt="" />
                </div>
                <div className="carousel-item ">
                    <img className='d-block w-100 h-78' src={detective} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;